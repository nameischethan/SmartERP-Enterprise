from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Sale, Item, Customer
from schemas import SaleCreate

router = APIRouter(
    prefix="/sales",
    tags=["Sales Voucher"]
)


@router.post("/")
def create_sale(data: SaleCreate, db: Session = Depends(get_db)):

    item = db.query(Item).filter(Item.name == data.item_name).first()

    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    if item.quantity < data.quantity:
        raise HTTPException(status_code=400, detail="Insufficient Stock")

    customer = db.query(Customer).filter(
        Customer.name == data.customer_name
    ).first()

    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    total = data.quantity * data.selling_price

    sale = Sale(
        customer_name=data.customer_name,
        item_name=data.item_name,
        quantity=data.quantity,
        selling_price=data.selling_price,
        total_amount=total
    )

    db.add(sale)

    # Reduce stock
    item.quantity -= data.quantity

    # Increase customer outstanding
    customer.outstanding += total

    db.commit()

    return {
        "message": "Sales Voucher Created Successfully",
        "Total Amount": total
    }


@router.get("/")
def get_sales(db: Session = Depends(get_db)):
    return db.query(Sale).all()
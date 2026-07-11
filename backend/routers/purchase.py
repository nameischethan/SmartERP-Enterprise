from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Purchase, Item, Supplier
from schemas import PurchaseCreate

router = APIRouter(
    prefix="/purchase",
    tags=["Purchase Voucher"]
)


@router.post("/")
def create_purchase(data: PurchaseCreate, db: Session = Depends(get_db)):

    item = db.query(Item).filter(Item.name == data.item_name).first()

    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    supplier = db.query(Supplier).filter(
        Supplier.name == data.supplier_name
    ).first()

    if not supplier:
        raise HTTPException(status_code=404, detail="Supplier not found")

    total = data.quantity * data.purchase_price

    purchase = Purchase(
        supplier_name=data.supplier_name,
        item_name=data.item_name,
        quantity=data.quantity,
        purchase_price=data.purchase_price,
        total_amount=total
    )

    db.add(purchase)

    # Increase stock
    item.quantity += data.quantity

    # Increase supplier outstanding
    supplier.outstanding += total

    db.commit()

    return {
        "message": "Purchase Voucher Created Successfully",
        "Total Amount": total
    }


@router.get("/")
def get_purchases(db: Session = Depends(get_db)):
    return db.query(Purchase).all()
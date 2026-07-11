from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Sale

router = APIRouter(
    prefix="/invoice",
    tags=["Invoice"]
)


@router.get("/{sale_id}")
def generate_invoice(sale_id: int, db: Session = Depends(get_db)):

    sale = db.query(Sale).filter(Sale.id == sale_id).first()

    if not sale:
        raise HTTPException(status_code=404, detail="Invoice not found")

    return {
        "Invoice No": f"INV-{sale.id:04}",
        "Customer": sale.customer_name,
        "Item": sale.item_name,
        "Quantity": sale.quantity,
        "Price": sale.selling_price,
        "Total": sale.total_amount
    }
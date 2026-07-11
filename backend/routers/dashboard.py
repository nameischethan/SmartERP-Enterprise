from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Customer, Supplier, Item, Purchase, Sale

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_customers = db.query(Customer).count()
    total_suppliers = db.query(Supplier).count()
    total_items = db.query(Item).count()

    total_purchase = sum(
        purchase.total_amount for purchase in db.query(Purchase).all()
    )

    total_sales = sum(
        sale.total_amount for sale in db.query(Sale).all()
    )

    return {
        "customers": total_customers,
        "suppliers": total_suppliers,
        "items": total_items,
        "total_purchase": total_purchase,
        "total_sales": total_sales
    }
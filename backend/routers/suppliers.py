from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Supplier
from schemas import SupplierCreate

router = APIRouter(
    prefix="/suppliers",
    tags=["Suppliers"]
)


@router.post("/")
def add_supplier(supplier: SupplierCreate, db: Session = Depends(get_db)):
    new_supplier = Supplier(
        name=supplier.name,
        gst=supplier.gst,
        phone=supplier.phone
    )

    db.add(new_supplier)
    db.commit()
    db.refresh(new_supplier)

    return {
        "message": "Supplier Added Successfully",
        "supplier": new_supplier
    }


@router.get("/")
def get_suppliers(db: Session = Depends(get_db)):
    return db.query(Supplier).all()
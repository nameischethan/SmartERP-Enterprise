from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Customer
from schemas import CustomerCreate

router = APIRouter(
    prefix="/customers",
    tags=["Customers"]
)


@router.post("/")
def add_customer(customer: CustomerCreate, db: Session = Depends(get_db)):
    new_customer = Customer(
        name=customer.name,
        phone=customer.phone,
        address=customer.address
    )

    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)

    return {
        "message": "Customer Added Successfully",
        "customer": new_customer
    }


@router.get("/")
def get_customers(db: Session = Depends(get_db)):
    return db.query(Customer).all()
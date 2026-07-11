from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Item
from schemas import ItemCreate

router = APIRouter(
    prefix="/items",
    tags=["Stock Items"]
)

@router.post("/")
def add_item(item: ItemCreate, db: Session = Depends(get_db)):
    new_item = Item(
        sku=item.sku,
        name=item.name,
        purchase_price=item.purchase_price,
        selling_price=item.selling_price,
        quantity=item.quantity
    )

    db.add(new_item)
    db.commit()
    db.refresh(new_item)

    return {
        "message": "Item Added Successfully",
        "item": new_item
    }

@router.get("/")
def get_items(db: Session = Depends(get_db)):
    return db.query(Item).all()
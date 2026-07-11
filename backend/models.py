from sqlalchemy import Column, Integer, String, Float
from database import Base


# ----------------------------
# Customer Ledger
# ----------------------------
class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    phone = Column(String)
    address = Column(String)
    outstanding = Column(Float, default=0)


# ----------------------------
# Supplier Ledger
# ----------------------------
class Supplier(Base):
    __tablename__ = "suppliers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    gst = Column(String)
    phone = Column(String)
    outstanding = Column(Float, default=0)


# ----------------------------
# Stock Items
# ----------------------------
class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    sku = Column(String, unique=True)
    name = Column(String, nullable=False)
    purchase_price = Column(Float)
    selling_price = Column(Float)
    quantity = Column(Integer, default=0)


# ----------------------------
# Purchase Voucher
# ----------------------------
class Purchase(Base):
    __tablename__ = "purchases"

    id = Column(Integer, primary_key=True, index=True)

    supplier_name = Column(String)
    item_name = Column(String)

    quantity = Column(Integer)

    purchase_price = Column(Float)

    total_amount = Column(Float)


# ----------------------------
# Sales Voucher
# ----------------------------
class Sale(Base):
    __tablename__ = "sales"

    id = Column(Integer, primary_key=True, index=True)

    customer_name = Column(String)

    item_name = Column(String)

    quantity = Column(Integer)

    selling_price = Column(Float)

    total_amount = Column(Float)
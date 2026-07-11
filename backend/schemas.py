from pydantic import BaseModel


# ---------------- Customer ----------------

class CustomerCreate(BaseModel):
    name: str
    phone: str
    address: str


class CustomerResponse(BaseModel):
    id: int
    name: str
    phone: str
    address: str
    outstanding: float

    class Config:
        from_attributes = True


# ---------------- Supplier ----------------

class SupplierCreate(BaseModel):
    name: str
    gst: str
    phone: str


class SupplierResponse(BaseModel):
    id: int
    name: str
    gst: str
    phone: str
    outstanding: float

    class Config:
        from_attributes = True


# ---------------- Item ----------------

class ItemCreate(BaseModel):
    sku: str
    name: str
    purchase_price: float
    selling_price: float
    quantity: int


class ItemResponse(BaseModel):
    id: int
    sku: str
    name: str
    purchase_price: float
    selling_price: float
    quantity: int

    class Config:
        from_attributes = True


# ---------------- Purchase ----------------

class PurchaseCreate(BaseModel):
    supplier_name: str
    item_name: str
    quantity: int
    purchase_price: float


# ---------------- Sale ----------------

class SaleCreate(BaseModel):
    customer_name: str
    item_name: str
    quantity: int
    selling_price: float

    class Config:
        from_attributes = True
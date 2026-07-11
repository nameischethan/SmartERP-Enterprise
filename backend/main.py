from routers.customers import router as customer_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from routers.suppliers import router as supplier_router
from database import Base, engine
from routers.items import router as item_router
from routers.purchase import router as purchase_router
from routers.sales import router as sales_router
from routers.dashboard import router as dashboard_router
from routers.invoice import router as invoice_router


# Import all models so SQLAlchemy creates the tables
import models

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SmartERP API",
    description="Billing, Inventory & Accounting Management System",
    version="1.0"
)
app.include_router(customer_router)
app.include_router(supplier_router)
app.include_router(item_router)
app.include_router(purchase_router)
app.include_router(sales_router)
app.include_router(dashboard_router)
app.include_router(invoice_router)
@app.get("/")
def home():
    return {
        "message": "Welcome to SmartERP 🚀",
        "status": "Backend Running Successfully"
    }
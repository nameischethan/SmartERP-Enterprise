# SmartERP Enterprise

SmartERP Enterprise is a Full Stack ERP (Enterprise Resource Planning) application inspired by TallyPrime. It helps businesses manage customers, suppliers, inventory, purchases, sales, and invoices through a modern web interface.

## Features

- Dashboard Analytics
- Customer Management
- Supplier Management
- Stock Item Management
- Purchase Voucher
- Sales Voucher
- Invoice Generation
- REST API using FastAPI
- SQLite Database

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn

### Database
- SQLite

## Project Structure

```
SmartERP/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── routers/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── README.md
```

## Modules

- Dashboard
- Customer Ledger
- Supplier Ledger
- Stock Items
- Purchase Voucher
- Sales Voucher
- Invoice

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/SmartERP-Enterprise.git
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
uvicorn main:app --reload
```

Open the frontend

```
frontend/index.html
```

## Future Enhancements

- Authentication
- GST Module
- Reports
- PDF Invoice
- Barcode Scanner
- PostgreSQL
- Docker Deployment

## Author

Chethan Sai U
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install and run backedn server
===
Step 1: Install and activate virtual environment
```
python3 -m venv venv
source venv/bin/activete
```

Step 2: Install pip requirements
```
pip install -r requirements.txt
```

Step 3: Create `.env` file inside backend folder
```
cd backend
touch .env
```

Step 4: Add `.env` file the secret key
```
DEBUG=True
SECRET_KEY=your-secret-key
```

Step 5: Run the API server
```
python manage.py runserver 8000
```

Your server should be running at port 8000!

Install and run frontend server
===
Step 1: Go to frontend folder and install the requirements
```
cd frontend
npm install
```

Step 2: Create `.env.local` inside the frontend folder
```
touch .env.local
```

Step 3: Add api server url in `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Step 4:
Run your frontend server
```
npm run dev
```

Your frontend should be running at port 3000!

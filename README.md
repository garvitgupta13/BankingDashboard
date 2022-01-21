# BankingDashboard
One page interactive baking user dashboard

## Steps to run:
- Fork the repo

### Run frontend
```
cd client
npm install
npm start
```

### Setting up environment for server
* Move to server directory `cd server`
* Create a virtual environment  
  * on **Ubuntu**: `python3 -m venv env`  
  * on **Windows PowerShell**: `python -m venv env`
* Activate the *env*    
  * on **Ubuntu**: `source env/bin/activate`
  * on **Windows PowerShell**: `.\env\Scripts\Activate.ps1`     
  **Note** : On Windows, it may be required to enable the Activate.ps1 script by setting the execution policy for the user. You can do this by issuing the following command: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
* Install the requirements: `pip install -r requirements.txt`

### Running server

* Change directory to **server** `cd server`
* Run the server `python manage.py runserver`

## Deployed Links:
- [Frontend Link](http://banking-dashboard.herokuapp.com/)
- [Backend Link](https://bankingdashboard-server.herokuapp.com/)

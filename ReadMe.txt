MOT SERVICE TYRES BRAKES 
EXHAUSTS BATTRIES DIAGNOSTICS
CLUTCHES SUSPENSION REPAIRS

✅ Goal:
Set up your contact form to send form data to your Gmail inbox using Google Apps Script as a free backend.

🔧 Step-by-Step Setup (Google Apps Script)
📌 Step 1: Create a Google Sheet
Go to Google Sheets.

Create a new blank sheet.

Rename it (e.g., Contact Form Responses).

📌 Step 2: Open the Script Editor
From your sheet, click:
Extensions > Apps Script

Delete any starter code and replace it with:

javascript

Copy

Edit
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Log to sheet (optional)
  sheet.appendRow([new Date(), data.name, data.email, data.phone, data.subject, data.message]);

  // Send email
  MailApp.sendEmail({
    to: "yourname@gmail.com", // 🔁 REPLACE with your Gmail
    subject: data.subject || "New Contact Form Submission",
    htmlBody: `
      <p><strong>Name:strong> ${data.name}p>
      <p><strong>Email:strong> ${data.email}p>
      <p><strong>Phone:strong> ${data.phone}p>
      <p><strong>Message:strong>p>
      <p>${data.message}p>
    `
  });

  return ContentService.createTextOutput("Success");
}
⚠️ Replace yourname@gmail.com with the Gmail where you want to receive messages.

📌 Step 3: Deploy the Script as Web App
Click Deploy > Manage deployments.

Click + New deployment.

Under Select type, choose Web App.

Configure:

Description: "Contact Form Handler"

Execute as: Me

Who has access: Anyone

Click Deploy.

Authorize the script (click “Review permissions” > select your account > Allow).

Copy the Web App URL — e.g.,
https://script.google.com/macros/s/AKfycbXYZ123abc.../exec


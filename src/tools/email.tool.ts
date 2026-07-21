





import { Tool } from "./tool"
const nodemailer = require("nodemailer");

export class EmailTool implements Tool {
 name="sendEmail";
 description="send an email to specified recipient with subject and message.";
 parameters={
    type:'object',
    properties:{
        emaildata:{
            type:'object',
            to:{
                type:'string'
            },
            subject:{
                type:'string'
            },
            message:{
                type:'string'
            }
        }
    }
};
  async execute(args: Record<string, unknown>) {
  console.log("Executing sendEmail tool with args:", args);
    const emailData:any = args.emaildata;
    if (!emailData || !emailData.to ) {
    throw new Error("Missing required email data.");
    }
        this.sendMail(emailData.to, emailData.subject ? emailData.subject : "", emailData.message ? emailData.message : emailData.html);
  }
 

toSchema() {
   

    return {

        type:"function",

        function:{

            name:this.name,

            description:this.description,

            parameters:this.parameters

        }

    }

}


private async sendMail(to: string, subject: string, message: string) {

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "santosh.m@hubengage.com",
    pass: "",
  },
});


  try {
    const info = await transporter.sendMail({
      from: 'santosh.m@hubengage.com',
      to,
      subject,
      text: message,
      html: `${message}`,
    });

    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error(err);
  }
}

}











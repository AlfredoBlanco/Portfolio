// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

type Data = {
  ok: boolean;
}

type Req = {
  name: string,
  email: string,
  phone?: string,
  subject: string,
  body: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method){
    case 'POST':
      try{
        const { name, email, phone, subject, body} : Req = req.body;

        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: 'alfre.blanco12@gmail.com',
            pass: process.env.MAIL_SECRET,
          },
        });
        await transporter.verify().then(() => {
          console.log('Ready for sending');
        })
        let info = await transporter.sendMail({
          from: `"New contact from portfolio" <${email}>`,
          to: "alfre.blanco12@gmail.com",
          subject: `${subject}`,
          html: `
            <h1>Hola soy ${name}</h1>
            <h2>Te contacto por ${subject}</h2>
            <p>Mi email es <strong>${email}</strong> ${phone?.length ? `Mi telefono es ${phone}` : ''}.</p>
            <p>${body}</p>
            <p>Saludos.</p>
          `,
        });
        return info.rejected.length ? res.json({ok : false}) : res.json({ok: true});

      } catch(e) {
        console.log(e);
        return res.json({ok : false});
      }
    default:
      return res.status(200).json({ ok : false })

  }
}

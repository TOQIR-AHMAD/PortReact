import client from '@/config/postmark';

export async function POST(request: Request) {
  // Temporary disabled response
  return new Response(
    JSON.stringify({ 
      status: 'disabled',
      message: 'Contact form is temporarily unavailable',
      note: 'This would normally send an email in production'
    }), 
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  );

  // lklklkl

  /* Keep this commented code for when you want to re-enable
  const body = await request.json();
  
  // Validation - keep this when re-enabling
  if (!body.person_name || !body.email || !body.message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }), 
      { status: 400 }
    );
  }

  try {
    await client.sendEmail({
      From: process.env.EMAIL_FROM || 'no-reply@example.com',
      To: process.env.EMAIL_TO || 'admin@example.com',
      Subject: 'Portfolio Contact Form',
      HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        <p><strong>Message:</strong> ${body.message}</p>
      `,
      ReplyTo: body.email,
    });
    
    return new Response(
      JSON.stringify({ success: true }), 
      { status: 200 }
    );
  } catch (e) {
    console.error('Email sending error:', e);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }), 
      { status: 500 }
    );
  }
  */
}
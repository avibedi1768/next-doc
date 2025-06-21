"use client"

export default function GoogleMap() {
  return (
    <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5234567890123!2d-115.1398296!3d36.1699412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4a8a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Quality Guard MSO Location - Las Vegas, Nevada"
      />
    </div>
  )
}

"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.9234007365967!2d-118.43642082390015!3d34.05032337315772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb9ca787d553%3A0xee891c0850d0bc6d!2s10780%20Santa%20Monica%20Blvd%20Suite%20210%2C%20Los%20Angeles%2C%20CA%2090025%2C%20USA!5e1!3m2!1sen!2sin!4v1752314891996!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Quality Guard MSO Location - Las Vegas, Nevada"
      />
    </div>
  );
}

export const WHATSAPP_PHONE = '9963290808';
export const WHATSAPP_PHONE_INTL = '919963290808';
export const BUSINESS_EMAIL = 'neelimadotk0402@gmail.com';
export const BUSINESS_OWNER = 'K. Neelima';

/**
 * Builds a direct WhatsApp chat URL with encoded prefilled message
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = WHATSAPP_PHONE_INTL.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Generates product-specific enquiry message
 */
export function getProductEnquiryMessage(
  productName: string
): string {
  let msg = `Hello NOJUNK!\n\nI would like to enquire and order:\nProduct: ${productName}`;
  if (productName.toLowerCase().includes('stuffed & studded') || productName.toLowerCase().includes('chocolate medjool dates')) {
    msg += `\n(Signature Recipe - Min order: 9 pieces)`;
  }
  msg += `\n\nFor Enquiry & Orders: Please share the available fresh batch details, packaging options, and dispatch timelines.\n\nThank you!`;
  return msg;
}

/**
 * Generates gifting enquiry message
 */
export function getGiftingEnquiryMessage(occasion?: string): string {
  let msg = `Hello NOJUNK!\n\nI am interested in your premium gift collection`;
  if (occasion) {
    msg += ` for ${occasion}`;
  }
  msg += `.\n\nPlease share the available gift boxes, customization options, packaging styles, and pricing.\n\nThank you!`;
  return msg;
}

/**
 * Generates custom contact form enquiry message
 */
export function getContactFormMessage(data: {
  name: string;
  phone?: string;
  message: string;
  subject?: string;
}): string {
  return `Hello NOJUNK!\n\nMy Name: ${data.name}${data.phone ? `\nPhone: ${data.phone}` : ''}${
    data.subject ? `\nTopic: ${data.subject}` : ''
  }\n\nEnquiry / Note:\n"${data.message}"\n\nLooking forward to hearing from you!`;
}

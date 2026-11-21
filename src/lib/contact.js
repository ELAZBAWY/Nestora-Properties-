// Centralized direct-contact configuration for NESTORA.
// This is the existing advisor WhatsApp number in international format.
export const WHATSAPP_NUMBER = "201002489912";

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getPropertyWhatsAppMessage({
  propertyName,
  propertyRef,
  propertyUrl,
  context,
  isRTL = false,
}) {
  if (isRTL) {
    return `مرحباً، أرغب في الاستفسار عن ${propertyName}${propertyRef ? ` (${propertyRef})` : ""}. ${context || "يرجى مشاركة مزيد من التفاصيل."}${propertyUrl ? `\nرابط العقار: ${propertyUrl}` : ""}`;
  }

  return `Hello, I would like to inquire about ${propertyName}${propertyRef ? ` (${propertyRef})` : ""}. ${context || "Please share more details."}${propertyUrl ? `\nProperty link: ${propertyUrl}` : ""}`;
}

import { EVENT, CONTACTS } from "../data/constants";

const REGISTRATION_MESSAGE =
  "Hi, I'd like to register for the GCF 56th Thanksgiving Dinner.";

export const waLink = (phone: string, message: string = REGISTRATION_MESSAGE) => {
  const ms = phone.replace(/\D/g, "").replace(/^0/, "");
  return `https://wa.me/60${ms}?text=${encodeURIComponent(message)}`;
};

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

const toICSDate = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const googleCalendarUrl = () => {
  const start = new Date("2026-08-15T18:00:00+08:00");
  const end = new Date("2026-08-15T21:00:00+08:00");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${toICSDate(start)}/${toICSDate(end)}`,
    ctz: "Asia/Kuala_Lumpur",
    details: `${EVENT.theme}\nRegister: ${CONTACTS.shortlink}\n${CONTACTS.primary.name} ${CONTACTS.primary.phone} · ${CONTACTS.secondary.name} ${CONTACTS.secondary.phone}`,
    location: EVENT.venue,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadICS = () => {
  const start = toICSDate(new Date("2026-08-15T18:00:00+08:00"));
  const end = toICSDate(new Date("2026-08-15T21:00:00+08:00"));
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GCF Malaysia//56th Dinner//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:56th-dinner@gcfmalaysia.org",
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:${EVENT.theme}\\nRegister: ${CONTACTS.shortlink}`,
    `LOCATION:${EVENT.venue}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "gcf-56th-thanksgiving-dinner.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

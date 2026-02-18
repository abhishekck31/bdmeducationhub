export const site = {
  name: "Bimla Devi Memorial Education Hub",
  shortName: "BDM Education Hub",
  slogan: "सफल भविष्य की मजबूत नींव",
  whatsappNumber: "+918708736484",
  addressLines: [
    "Galli number 2 South City",
    "Near Rajesh Pilot Chowk",
    "Rewari, Haryana 123401",
  ],
  social: {
    instagram: "https://www.instagram.com/bdm_educationhub",
    facebook: "https://www.facebook.com/share/1BuvTuamp3/",
    youtube: "https://youtube.com/@bdmeducationhub",
  },
  programs: {
    classes: "5th to 12th",
    specialBatches: ["Navodaya Exam", "Sainik School Exam"],
  },
} as const;

export function getWhatsAppLink(message: string) {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

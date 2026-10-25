// Keahlian. `learning: true` menandai yang masih dipelajari, supaya jujur terhadap level.
export const skillGroups = [
  {
    title: 'Pengujian',
    items: [
      { name: 'Skenario dan test case UAT' },
      { name: 'Pengujian end-to-end manual' },
      { name: 'Pelaporan temuan dengan prioritas dan bukti' },
      { name: 'Uji ulang setelah perbaikan' },
      { name: 'Pengujian alur pembayaran dan pengiriman' },
    ],
  },
  {
    title: 'Web dan data',
    items: [
      { name: 'React, TypeScript, Tailwind (dibangun dengan bantuan AI)' },
      { name: 'SQL, skema database, backup dan recovery' },
      { name: 'Supabase' },
      { name: 'Google Sheets dan Apps Script' },
    ],
  },
  {
    title: 'Automation dan AI',
    items: [
      { name: 'n8n: workflow dan bot Telegram' },
      { name: 'AI Agent di n8n dengan model OpenAI' },
      { name: 'Integrasi Google Sheets dan Supabase' },
    ],
  },
  {
    title: 'Desain 3D untuk manufaktur',
    items: [
      { name: 'SolidWorks: part dan assembly', learning: true },
      { name: 'Material dan fitur dasar (extrude, cut, fillet)', learning: true },
      { name: 'Gambar kerja, exploded view, BOM', learning: true },
    ],
  },
];

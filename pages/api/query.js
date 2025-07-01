export default async function handler(req, res) {
  return res.json({ name: 2 }, { status: 200 });
}

export default function handler(req: any, res: any) {
  const { slug } = req.query;
  res.end(`Post: ${slug.join(", ")}`);
}

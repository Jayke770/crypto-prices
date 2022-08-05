import CoinGecko from "coingecko-api"
const CoinGeckoClient = new CoinGecko()
export default async function Crypto(req, res) {
    const { method } = req
    try {
        if (method === 'GET') {
            const data = await CoinGeckoClient.coins.all()
            return res.send(data.data)
        } else {
            return res.status(403).send()
        }
    } catch (e) {
        console.log(e)
        return res.status(500).send()
    }
}
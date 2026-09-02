// ==========================================
// DATABASE FRASARIO COMPLETO (CON CATEGORIE)
// ==========================================

const phrasebookDatabase = [
  // 🤝 INCONTRO
  { category: "incontro", it: "Buongiorno.", ja: "おはようございます。", romaji: "Ohayou gozaimasu." },
  { category: "incontro", it: "Ciao! / Buon pomeriggio.", ja: "こんにちは！", romaji: "Konnichiwa!" },
  { category: "incontro", it: "Buonasera.", ja: "こんばんは。", romaji: "Konbanwa." },
  { category: "incontro", it: "Piacere di conoscerti.", ja: "はじめまして。", romaji: "Hajimemashite." },
  { category: "incontro", it: "Come stai?", ja: "お元気ですか？", romaji: "Ogenki desu ka?" },
  { category: "incontro", it: "Sto bene, grazie.", ja: "はい、元気です。ありがとうございます。", romaji: "Hai, genki desu. Arigatou gozaimasu." },
  { category: "incontro", it: "Mi chiamo...", ja: "私の名前は...です。", romaji: "Watashi no namae wa... desu." },
  { category: "incontro", it: "Vengo dall'Italia.", ja: "イタリアから来ました。", romaji: "Itaria kara kimashita." },
  { category: "incontro", it: "Arrivederci.", ja: "さようなら。", romaji: "Sayounara." },
  { category: "incontro", it: "A domani.", ja: "また明日。", romaji: "Mata ashita." },
  { category: "incontro", it: "Buonanotte.", ja: "おやすみなさい。", romaji: "Oyasuminasai." },

  // 🗣️ CORTESIA
  { category: "cortesia", it: "Grazie mille.", ja: "どうもありがとうございます。", romaji: "Doumo arigatou gozaimasu." },
  { category: "cortesia", it: "Prego / Di niente.", ja: "どういたしまして。", romaji: "Dou itashimashite." },
  { category: "cortesia", it: "Scusi / Mi scusi.", ja: "すみません。", romaji: "Sumimasen." },
  { category: "cortesia", it: "Mi dispiace / Perdonami.", ja: "ごめんなさい。", romaji: "Gomennasai." },
  { category: "cortesia", it: "Sì.", ja: "はい。", romaji: "Hai." },
  { category: "cortesia", it: "No.", ja: "いいえ。", romaji: "Iie." },
  { category: "cortesia", it: "Non capisco.", ja: "わかりません。", romaji: "Wakarimasen." },
  { category: "cortesia", it: "Ho capito.", ja: "わかりました。", romaji: "Wakarimashita." },
  { category: "cortesia", it: "Parli inglese?", ja: "英語を話せますか？", romaji: "Eigo o hanasemasu ka?" },
  { category: "cortesia", it: "Puoi parlare un po' più piano, per favore?", ja: "もう少しゆっくり話してください。", romaji: "Mou sukoshi yukkuri hanashite kudasai." },

  // ✈️ VIAGGIO
  { category: "viaggio", it: "Dov'è la stazione ferroviaria?", ja: "駅はどこですか？", romaji: "Eki wa doko desu ka?" },
  { category: "viaggio", it: "Vorrei un biglietto per Tokyo.", ja: "東京までの切符をお願いします。", romaji: "Tokyo made no kippu o onegaishimasu." },
  { category: "viaggio", it: "Da quale binario parte il treno per Osaka?", ja: "大阪行きの電車は何番線から出ますか？", romaji: "Osaka yuki no densha wa nanbansen kara demasu ka?" },
  { category: "viaggio", it: "Questo treno va a Kanazawa?", ja: "この電車は金沢に行きますか？", romaji: "Kono densha wa Kanazawa ni ikimasu ka?" },
  { category: "viaggio", it: "Dov'è la fermata dell'autobus?", ja: "バス停はどこですか？", romaji: "Basutei wa doko desu ka?" },
  { category: "viaggio", it: "Dove posso prendere un taxi?", ja: "どこでタクシーに乗れますか？", romaji: "Doko de takushii ni noremasu ka?" },

  // 🍽️ RISTORANTE
  { category: "ristorante", it: "Siamo in due.", ja: "二人です。", romaji: "Futari desu." },
  { category: "ristorante", it: "Avete un menù in inglese?", ja: "英語のメニューはありますか？", romaji: "Eigo no menyuu wa arimasu ka?" },
  { category: "ristorante", it: "Vorrei ordinare questo, per favore.", ja: "これを注文したいです。", romaji: "Kore o chuumon shitai desu." },
  { category: "ristorante", it: "Cosa mi consiglia?", ja: "おすすめは何ですか？", romaji: "Osusume wa nan desu ka?" },
  { category: "ristorante", it: "Da bere, dell'acqua per favore.", ja: "お水をお願いします。", romaji: "Omizu o onegaishimasu." },
  { category: "ristorante", it: "Il conto, per favore.", ja: "お会計をお願いします。", romaji: "Okaikei o onegaishimasu." },

  // 🛍️ SHOPPING
  { category: "shopping", it: "Quanto costa questo?", ja: "これはいくらですか？", romaji: "Kore wa ikura desu ka?" },
  { category: "shopping", it: "Posso provarlo?", ja: "試着してもいいですか？", romaji: "Shichaku shite mo ii desu ka?" },
  { category: "shopping", it: "Avete una taglia più grande?", ja: "もう少し大きいサイズはありますか？", romaji: "Mou sukoshi ookii saizu wa arimasu ka?" },
  { category: "shopping", it: "Lo prendo.", ja: "これにします。", romaji: "Kore ni shimasu." },

  // 🏨 HOTEL
  { category: "hotel", it: "Ho una prenotazione.", ja: "予約しています。", romaji: "Yoyaku shite imasu." },
  { category: "hotel", it: "Vorrei fare il check-in.", ja: "チェックインをお願いします。", romaji: "Chekkuin o onegaishimasu." },
  { category: "hotel", it: "A che ora è la colazione?", ja: "朝食は何時ですか？", romaji: "Choushoku wa nanji desu ka?" },
  { category: "hotel", it: "Non c'è acqua calda.", ja: "お湯が出ません。", romaji: "Oyu ga demasen." },
  
  // 🚨 EMERGENZE
  { category: "emergenze", it: "Aiuto!", ja: "助けて！", romaji: "Tasukete!" },
  { category: "emergenze", it: "Ho bisogno di un medico.", ja: "医者が必要です。", romaji: "Isha ga hitsuyou desu." },
  { category: "emergenze", it: "Chiami un'ambulanza!", ja: "救急車を呼んでください！", romaji: "Kyuukyuusha o yonde kudasai!" },
  { category: "emergenze", it: "Ho perso il mio passaporto.", ja: "パスポートをなくしました。", romaji: "Pasupooto o nakushimashita." }
];
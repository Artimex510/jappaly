// ==========================================
// DATABASE FRASARIO COMPLETO (JSON LOCALE)
// ==========================================

const phrasebookDatabase = [
  // 🤝 1. INCONTRO E PRESENTAZIONI (Gradi formali e informali)
  { it: "Buongiorno.", ja: "おはようございます。", romaji: "Ohayou gozaimasu." },
  { it: "Ciao! / Buon pomeriggio.", ja: "こんにちは！", romaji: "Konnichiwa!" },
  { it: "Buonasera.", ja: "こんばんは。", romaji: "Konbanwa." },
  { it: "Piacere di conoscerti.", ja: "はじめまして。", romaji: "Hajimemashite." },
  { it: "Come stai?", ja: "お元気ですか？", romaji: "Ogenki desu ka?" },
  { it: "Sto bene, grazie.", ja: "はい、元気です。ありがとうございます。", romaji: "Hai, genki desu. Arigatou gozaimasu." },
  { it: "Mi chiamo...", ja: "私の名前は...です。", romaji: "Watashi no namae wa... desu." },
  { it: "Vengo dall'Italia.", ja: "イタリアから来ました。", romaji: "Itaria kara kimashita." },
  { it: "Arrivederci.", ja: "さようなら。", romaji: "Sayounara." },
  { it: "A domani.", ja: "また明日。", romaji: "Mata ashita." },
  { it: "Buonanotte.", ja: "おやすみなさい。", romaji: "Oyasuminasai." },

  // 🗣️ 2. COMUNICAZIONE E CORTESIA
  { it: "Grazie mille.", ja: "どうもありがとうございます。", romaji: "Doumo arigatou gozaimasu." },
  { it: "Prego / Di niente.", ja: "どういたしまして。", romaji: "Dou itashimashite." },
  { it: "Scusi / Mi scusi (per attirare l'attenzione).", ja: "すみません。", romaji: "Sumimasen." },
  { it: "Mi dispiace / Perdonami.", ja: "ごめんなさい。", romaji: "Gomennasai." },
  { it: "Sì.", ja: "はい。", romaji: "Hai." },
  { it: "No.", ja: "いいえ。", romaji: "Iie." },
  { it: "Non capisco.", ja: "わかりません。", romaji: "Wakarimasen." },
  { it: "Ho capito.", ja: "わかりました。", romaji: "Wakarimashita." },
  { it: "Parli inglese?", ja: "英語を話せますか？", romaji: "Eigo o hanasemasu ka?" },
  { it: "Puoi parlare un po' più piano, per favore?", ja: "もう少しゆっくり話してください。", romaji: "Mou sukoshi yukkuri hanashite kudasai." },
  { it: "Come si dice in giapponese?", ja: "日本語で何と言いますか？", romaji: "Nihongo de nan to iimasu ka?" },
  { it: "Puoi ripeterlo, per favore?", ja: "もう一度言ってください。", romaji: "Mou ichido itte kudasai." },

  // ✈️ 3. IN VIAGGIO E TRASPORTI
  { it: "Dov'è la stazione ferroviaria?", ja: "駅はどこですか？", romaji: "Eki wa doko desu ka?" },
  { it: "Vorrei un biglietto per Tokyo, per favore.", ja: "東京までの切符をお願いします。", romaji: "Tokyo made no kippu o onegaishimasu." },
  { it: "Da quale binario parte il treno per Osaka?", ja: "大阪行きの電車は何番線から出ますか？", romaji: "Osaka yuki no densha wa nanbansen kara demasu ka?" },
  { it: "Questo treno va a Kanazawa?", ja: "この電車は金沢に行きますか？", romaji: "Kono densha wa Kanazawa ni ikimasu ka?" },
  { it: "A che ora parte il prossimo treno?", ja: "次の電車は何時に出発しますか？", romaji: "Tsugi no densha wa nanji ni shuppatsu shimasu ka?" },
  { it: "Dov'è la fermata dell'autobus?", ja: "バス停はどこですか？", romaji: "Basutei wa doko desu ka?" },
  { it: "Dove posso prendere un taxi?", ja: "どこでタクシーに乗れますか？", romaji: "Doko de takushii ni noremasu ka?" },
  { it: "Mi porti a questo indirizzo, per favore.", ja: "この住所までお願いします。", romaji: "Kono juusho made onegaishimasu." },
  { it: "Quanto costa il biglietto?", ja: "切符はいくらですか？", romaji: "Kippu wa ikura desu ka?" },
  { it: "Sono perso. Mi può aiutare?", ja: "道に迷いました。助けてくれますか？", romaji: "Michi ni mayoimashita. Tasukete kuremasu ka?" },

  // 🍽️ 4. AL RISTORANTE E CIBO
  { it: "Siamo in due.", ja: "二人です。", romaji: "Futari desu." },
  { it: "Avete un menù in inglese?", ja: "英語のメニューはありますか？", romaji: "Eigo no menyuu wa arimasu ka?" },
  { it: "Vorrei ordinare questo, per favore.", ja: "これを注文したいです。", romaji: "Kore o chuumon shitai desu." },
  { it: "Cosa mi consiglia?", ja: "おすすめは何ですか？", romaji: "Osusume wa nan desu ka?" },
  { it: "Da bere, dell'acqua per favore.", ja: "お水をお願いします。", romaji: "Omizu o onegaishimasu." },
  { it: "Vorrei una birra.", ja: "ビールをお願いします。", romaji: "Biiru o onegaishimasu." },
  { it: "È delizioso!", ja: "とても美味しいです！", romaji: "Totemo oishii desu!" },
  { it: "Sono pieno.", ja: "お腹がいっぱいです。", romaji: "Onaka ga ippai desu." },
  { it: "Il conto, per favore.", ja: "お会計をお願いします。", romaji: "Okaikei o onegaishimasu." },
  { it: "Posso pagare con la carta di credito?", ja: "クレジットカードは使えますか？", romaji: "Kurejitto kaado wa tsukaemasu ka?" },
  { it: "Non mangio carne.", ja: "肉は食べません。", romaji: "Niku wa tabemasen." },

  // 🛍️ 5. SHOPPING E ACQUISTI
  { it: "Quanto costa questo?", ja: "これはいくらですか？", romaji: "Kore wa ikura desu ka?" },
  { it: "Posso provarlo?", ja: "試着してもいいですか？", romaji: "Shichaku shite mo ii desu ka?" },
  { it: "Avete una taglia più grande?", ja: "もう少し大きいサイズはありますか？", romaji: "Mou sukoshi ookii saizu wa arimasu ka?" },
  { it: "Avete una taglia più piccola?", ja: "もう少し小さいサイズはありますか？", romaji: "Mou sukoshi chiisai saizu wa arimasu ka?" },
  { it: "Lo prendo.", ja: "これにします。", romaji: "Kore ni shimasu." },
  { it: "Sto solo dando un'occhiata, grazie.", ja: "見ているだけです、ありがとう。", romaji: "Mite iru dake desu, arigatou." },
  { it: "Dove sono i camerini?", ja: "試着室はどこですか？", romaji: "Shichakushitsu wa doko desu ka?" },

  // 🏨 6. HOTEL E ALLOGGIO
  { it: "Ho una prenotazione.", ja: "予約しています。", romaji: "Yoyaku shite imasu." },
  { it: "Vorrei fare il check-in.", ja: "チェックインをお願いします。", romaji: "Chekkuin o onegaishimasu." },
  { it: "A che ora è la colazione?", ja: "朝食は何時ですか？", romaji: "Choushoku wa nanji desu ka?" },
  { it: "Dov'è l'ascensore?", ja: "エレベーターはどこですか？", romaji: "Erebeetaa wa doko desu ka?" },
  { it: "La mia stanza non è pulita.", ja: "部屋が掃除されていません。", romaji: "Heya ga souji sarete imasen." },
  { it: "Non c'è acqua calda.", ja: "お湯が出ません。", romaji: "Oyu ga demasen." },
  { it: "Vorrei fare il check-out.", ja: "チェックアウトをお願いします。", romaji: "Chekkuauto o onegaishimasu." },

  // 🚨 7. EMERGENZE E SALUTE
  { it: "Aiuto!", ja: "助けて！", romaji: "Tasukete!" },
  { it: "Ho bisogno di un medico.", ja: "医者が必要です。", romaji: "Isha ga hitsuyou desu." },
  { it: "Dov'è l'ospedale più vicino?", ja: "一番近い病院はどこですか？", romaji: "Ichiban chikai byouin wa doko desu ka?" },
  { it: "Chiami un'ambulanza, per favore!", ja: "救急車を呼んでください！", romaji: "Kyuukyuusha o yonde kudasai!" },
  { it: "Chiami la polizia!", ja: "警察を呼んでください！", romaji: "Keisatsu o yonde kudasai!" },
  { it: "Ho perso il mio passaporto.", ja: "パスポートをなくしました。", romaji: "Pasupooto o nakushimashita." },
  { it: "Non mi sento bene.", ja: "気分が悪いです。", romaji: "Kibun ga warui desu." }
];
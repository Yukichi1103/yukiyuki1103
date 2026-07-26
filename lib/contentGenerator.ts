import { FormData, GeneratedContent } from '@/types'

export function generateSalesContent(formData: FormData): GeneratedContent {
  const email = generateEmail(formData)
  const phoneScript = generatePhoneScript(formData)
  const followUpEmail = generateFollowUpEmail(formData)

  return {
    email,
    phoneScript,
    followUpEmail,
  }
}

function generateEmail(formData: FormData): string {
  const { companyName, industry, product, targetPosition, targetPain } = formData

  return `件名：${companyName}様の課題解決についてのご提案

${targetPosition}様

いつもお世話になっております。

本日は、${companyName}様に関して、${industry}業界向けのソリューションについてご提案させていただきたく、ご連絡させていただきました。

${targetPosition}様の組織では、${targetPain}という課題をお抱えと認識しております。

私たちの${product}は、以下の点で課題解決に貢献できます：

・業界トップクラスの導入実績と豊富なノウハウ
・導入から運用まで、専任チームによるサポート
・ROI向上を実現した複数事例

ぜひ一度、詳細なご説明の場をいただき、${companyName}様にとって最適なソリューションをご提案させていただきたく存じます。

お忙しいところ恐れ入りますが、ご都合がつきましたら、以下の日程でお時間をいただけますでしょうか。

＜提案可能日時＞
来週火曜日 14:00～
来週水曜日 15:00～
来週木曜日 10:00～、14:00～

ご不明な点やご不都合があれば、お気軽にお知らせください。

よろしくお願いいたします。

---
株式会社〇〇
営業部
〇〇太郎
メール：example@company.com
tel：09X-XXXX-XXXX
`
}

function generatePhoneScript(formData: FormData): string {
  const { companyName, industry, product, targetPosition, targetPain } = formData

  return `【電話営業スクリプト】

【導入部分】
「${targetPosition}様でしょうか？お忙しいところ恐れ入ります。
本日は、${company}に関してお電話させていただきました。
お時間をいただけますでしょうか？（OKの場合に進む）」

【アイスブレーク】
「ご多忙かと思いますので、手短にお話しさせていただきます。
実は、${industry}業界の企業様とお仕事をさせていただく機会が増えておりまして...」

【ニーズの引き出し】
「ところで、${targetPosition}様の組織では、${targetPain}という課題はお持ちですか？」

（相手の回答を聞く）

【提案へのつなぎ】
「実は、同業の複数社で、その課題を解決された事例があります。
それが、私たちの${product}なのです。

具体的には以下の3つのメリットがあります：

1つめが、導入から運用まで専任チームがサポートする点
2つめが、業界トップクラスの実績とノウハウ
3つめが、実際にROI向上を実現している点です。」

【次のアクション提案】
「今後の参考までに、詳細な資料と実装例をお送りすることは可能ですか？」

（了解の場合）
「ありがとうございます。
メールアドレスを確認させていただけますでしょうか？」

（メールアドレスを聞く）

「本日はお時間をいただき、ありがとうございました。
近日中に資料をお送りさせていただきます。
ご不明な点がございましたら、いつでもお気軽にお問い合わせください。」

【クロージング】
「本当にご忙しいところ、貴重なお時間をいただき、ありがとうございました。
ご検討のほど、よろしくお願いいたします。」
`
}

function generateFollowUpEmail(formData: FormData): string {
  const { companyName, industry, product, targetPosition, targetPain } = formData

  return `件名：【資料送付】${companyName}様向けソリューションのご提案

${targetPosition}様

いつもお世話になっております。

先日は、貴重なお時間をいただき、誠にありがとうございました。

本メールにて、${company}様の課題解決に向けた、${product}についての詳細資料をお送りいたします。

【ご提供資料】
・製品カタログ
・導入事例集（${industry}業界における成功事例）
・実装ガイド
・ROI試算シート

【資料内容のポイント】
・同業他社での導入による業務効率化の実績（平均XX%削減）
・導入から運用までのサポート体制
・カスタマイズ対応の事例

${targetPain}の解決に向けて、${product}がどのようにお役立てできるか、ぜひ一度ご確認いただきたく存じます。

【次のステップ】
ご不明な点やご質問がございましたら、下記までお気軽にお問い合わせください。

ご希望に応じて、以下のいずれかの対応が可能です：

1) オンライン説明会（30分程度）での詳細説明
2) お客様の環境に合わせたカスタマイズ提案
3) 無料トライアルの実施

【提案可能な日時】
来週：月曜日 14:00-17:00、火曜日 10:00-12:00、木曜日 15:00-17:00

お手数ですが、ご都合のよろしい日時をお知らせいただけますでしょうか。

ご検討のほど、よろしくお願いいたします。

---
株式会社〇〇
営業部
〇〇太郎
メール：example@company.com
tel：09X-XXXX-XXXX
公式サイト：https://example.com
`
}

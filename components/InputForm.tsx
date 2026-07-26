'use client'

import { useState } from 'react'
import { FormData, GeneratedContent } from '@/types'
import { generateSalesContent } from '@/lib/contentGenerator'

interface InputFormProps {
  onFormChange: (data: FormData) => void
  onGenerate: (content: GeneratedContent) => void
}

export default function InputForm({ onFormChange, onGenerate }: InputFormProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    product: '',
    targetPosition: '',
    targetPain: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const updatedData = { ...formData, [name]: value }
    setFormData(updatedData)
    onFormChange(updatedData)
  }

  const handleGenerate = () => {
    if (
      !formData.companyName ||
      !formData.industry ||
      !formData.product ||
      !formData.targetPosition ||
      !formData.targetPain
    ) {
      alert('すべての項目を入力してください')
      return
    }

    setIsLoading(true)
    // 実際の生成処理をシミュレート
    setTimeout(() => {
      const generatedContent = generateSalesContent(formData)
      onGenerate(generatedContent)
      setIsLoading(false)
    }, 500)
  }

  const handleReset = () => {
    const emptyData: FormData = {
      companyName: '',
      industry: '',
      product: '',
      targetPosition: '',
      targetPain: '',
    }
    setFormData(emptyData)
    onFormChange(emptyData)
    onGenerate({
      email: '',
      phoneScript: '',
      followUpEmail: '',
    })
  }

  return (
    <div className="card sticky top-8">
      <h2 className="section-title">営業情報入力</h2>

      <form className="space-y-4">
        {/* 企業名 */}
        <div>
          <label htmlFor="companyName" className="label-text">
            企業名 <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            placeholder="例：株式会社〇〇"
            className="input-field"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        {/* 業種 */}
        <div>
          <label htmlFor="industry" className="label-text">
            業種 <span className="text-red-500">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            className="input-field"
            value={formData.industry}
            onChange={handleInputChange}
          >
            <option value="">選択してください</option>
            <option value="IT">IT・ソフトウェア</option>
            <option value="金融">金融・保険</option>
            <option value="製造">製造・機械</option>
            <option value="小売">小売・流通</option>
            <option value="医療">医療・健康</option>
            <option value="不動産">不動産</option>
            <option value="教育">教育</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* 商品・サービス */}
        <div>
          <label htmlFor="product" className="label-text">
            自社の商品・サービス <span className="text-red-500">*</span>
          </label>
          <textarea
            id="product"
            name="product"
            placeholder="例：クラウド型顧客管理システム（CRM）"
            className="input-field resize-none"
            rows={3}
            value={formData.product}
            onChange={handleInputChange}
          />
        </div>

        {/* 営業相手の役職 */}
        <div>
          <label htmlFor="targetPosition" className="label-text">
            営業相手の役職 <span className="text-red-500">*</span>
          </label>
          <input
            id="targetPosition"
            type="text"
            name="targetPosition"
            placeholder="例：営業部長、経営企画室長"
            className="input-field"
            value={formData.targetPosition}
            onChange={handleInputChange}
          />
        </div>

        {/* 営業相手の悩み */}
        <div>
          <label htmlFor="targetPain" className="label-text">
            営業相手の悩み・課題 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="targetPain"
            name="targetPain"
            placeholder="例：顧客情報の一元管理ができておらず、営業効率が低下している"
            className="input-field resize-none"
            rows={3}
            value={formData.targetPain}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="btn-primary flex-1"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              生成中...
            </span>
          ) : (
            '📄 営業文章を生成'
          )}
        </button>
        <button
          onClick={handleReset}
          className="btn-secondary flex-1"
        >
          🔄 リセット
        </button>
      </div>
    </div>
  )
}

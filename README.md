# 🚀 AI Chat Platform

高性能なAIチャットプラットフォーム。複数の軽量モデルから超高性能モデルまで対応。

## 📋 機能

- ✅ 複数AIモデル対応（軽量から超高性能まで）
- ✅ ユーザー認証（ID/パスワード/名前）
- ✅ チャット履歴保存
- ✅ ストリーミング応答（爆速）
- ✅ マルチモデル選択
- ✅ クラウドセルフホスト対応

## 🏗️ アーキテクチャ

```
Frontend: Next.js + React
Backend: Node.js + Express
Database: PostgreSQL / MongoDB
AI Models: Ollama, Hugging Face, Local LLMs
```

## 📦 対応AIモデル

### 軽量モデル
- Phi-2 / Phi-3
- DistilBERT
- TinyLLaMA

### 中程度
- Mistral 7B
- Llama 2 7B/13B
- Neural Chat

### 高性能
- Llama 2 70B
- Mixtral 8x7B
- GPT-like モデル

## 🚀 クイックスタート

```bash
# リポジトリクローン
git clone https://github.com/yaju114514810/ai-chat-platform.git
cd ai-chat-platform

# セットアップ
docker-compose up -d
```

## 📁 プロジェクト構成

```
ai-chat-platform/
├── frontend/              # Next.js
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── package.json
├── backend/               # Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   └── package.json
├── docker-compose.yml
└── .env.example
```

## 📝 ライセンス

MIT

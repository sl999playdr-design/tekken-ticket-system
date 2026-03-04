const API_URL = "あなたのGASウェブアプリURLをここに貼る";

// データ取得（GET）
async function fetchSheetData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("通信エラー:", error);
        return []; // エラー時は空配列を返す
    }
}

// データ送信（POST）
async function postToSheet(payload) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain" // GASのCORS回避の定石
            },
            body: JSON.stringify(payload)
        });
        return await response.json(); // GASからの返却データ（新しいIDなど）を受け取る
    } catch (error) {
        console.error("送信エラー:", error);
        return { result: 'error' };
    }
}

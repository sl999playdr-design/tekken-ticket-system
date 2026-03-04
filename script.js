const GAS_URL = "あなたのGASウェブアプリURL";

async function issueTicket(type) {
  // 番号の生成ロジック（本来は現在の最終番号をスプシから取得して+1する）
  const id = generateNextId(type); 
  const vehicle = document.getElementById('vehicleSelect').value;

  const data = {
    id: id,
    type: type,
    vehicle: vehicle
  };

  // GASへ送信
  const response = await fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.ok) {
    // 発行成功したら issued.html へ飛ばす（IDをクエリパラメータで渡す）
    window.location.href = `issued.html?id=${id}&type=${type}&v=${encodeURIComponent(vehicle)}`;
  }
}

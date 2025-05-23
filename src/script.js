console.log('Hello, JavaScript!');

// 各画面画面のIDを取得する（画面操作用）
const loginScreen = document.querySelector('#login-screen')
const userManagementScreen = document.querySelector('#user-management-screen')

// ログインボタン
const loginBtn = document.querySelector('#login-btn');

// ログイン時の診察番号等の情報を取得
const txtNum = document.querySelector('#num');
const txtName = document.querySelector('#name');
const txtTel = document.querySelector('#tel');

const handleLogin = () => {
    console.log('loginBtnがクリックされた');
    // console.log('診察番号：', txtNum.value);
    console.log('飼い主：', txtName.value);
    // console.log('電話番号：', txtTel.value);
    // console.log(Object.entries(txtTel))
    if (txtNum.value != "0001") {
        alert('診察番号が違います');
    // } else if (txtName.value != "ツナ田 マグ太郎") {
    //     alert('飼い主様のお名前が違います');
    } else if (txtTel.value != "1234") {
        alert('電話番号（下4桁）が違います');
    } else {
        // console.log('ログイン成功！')
        loginScreen.style.display = 'none'
        userManagementScreen.style.display = 'flex'
        // *予約管理画面の挨拶メッセージ
        document.querySelector('#greeting').textContent = txtName.value + '　様の予約状況です';
    }
};

// *ログインボタンイベントの実装
loginBtn.addEventListener('click', handleLogin)

// ログアウトの実装
const logoutBtn = document.querySelector('#logout-btn');
const handleLogout = () => {
    console.log('logoutBtnがクリックされた');
    loginScreen.style.display = 'flex'
    userManagementScreen.style.display = 'none'
}

// *ログアウトボタンイベントの実装
logoutBtn.addEventListener('click', handleLogout)



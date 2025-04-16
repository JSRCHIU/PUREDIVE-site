document.addEventListener('DOMContentLoaded', function() {
    const languageSwitch = document.querySelector('.language-switch');
    
    // 初始化時隱藏英文內容
    document.querySelectorAll('[lang="en"]').forEach(el => {
        el.style.display = 'none';
    });
    
    // 切換語言
    languageSwitch.addEventListener('click', function() {
        const isEnglish = languageSwitch.textContent === 'ENG';
        
        // 更新按鈕文字
        languageSwitch.textContent = isEnglish ? 'CHN' : 'ENG';
        
        // 切換語言內容
        document.querySelectorAll('[lang="zh"], [lang="en"]').forEach(el => {
            if (el.getAttribute('lang') === (isEnglish ? 'en' : 'zh')) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });
        
        // 保存語言偏好
        localStorage.setItem('language', isEnglish ? 'en' : 'zh');
    });
    
    // 檢查並載入已保存的語言偏好
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        languageSwitch.click();
    }

    // 滾動控制
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 所有頁面都使用相同的滾動邏輯
        if (scrollTop <= 50) {
            languageSwitch.classList.remove('hidden');
        } else {
            languageSwitch.classList.add('hidden');
        }
    }

    // 添加滾動監聽
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始化時執行一次，確保正確的顯示狀態
    handleScroll();
});

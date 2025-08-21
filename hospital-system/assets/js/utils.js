// 表单验证函数
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            showError(input, '此字段为必填项');
            isValid = false;
        } else if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                showError(input, '请输入有效的邮箱地址');
                isValid = false;
            } else {
                clearError(input);
            }
        } else if (input.type === 'tel' && input.value.trim()) {
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(input.value.trim())) {
                showError(input, '请输入有效的手机号码');
                isValid = false;
            } else {
                clearError(input);
            }
        } else if (input.hasAttribute('data-minlength') && input.value.trim()) {
            const minLength = parseInt(input.getAttribute('data-minlength'));
            if (input.value.length < minLength) {
                showError(input, `长度不能少于${minLength}个字符`);
                isValid = false;
            } else {
                clearError(input);
            }
        } else {
            clearError(input);
        }
    });
    
    return isValid;
}

// 显示错误信息
function showError(input, message) {
    // 移除已有的错误提示
    clearError(input);
    
    // 创建错误提示元素
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '4px';
    errorElement.textContent = message;
    
    // 添加到输入框后面
    input.parentNode.appendChild(errorElement);
    
    // 高亮输入框
    input.style.borderColor = 'red';
}

// 清除错误信息
function clearError(input) {
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
        input.parentNode.removeChild(errorElement);
    }
    
    // 恢复输入框样式
    input.style.borderColor = '';
}

// 显示消息提示
function showAlert(type, message, duration = 3000) {
    // 移除已有的提示
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        document.body.removeChild(existingAlert);
    }
    
    // 创建提示元素
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type} fixed top-5 right-5 z-50`;
    alertElement.textContent = message;
    
    // 添加到页面
    document.body.appendChild(alertElement);
    
    // 设置样式
    alertElement.style.position = 'fixed';
    alertElement.style.top = '20px';
    alertElement.style.right = '20px';
    alertElement.style.zIndex = '1000';
    alertElement.style.padding = '15px 20px';
    alertElement.style.borderRadius = '4px';
    alertElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    
    // 自动关闭
    setTimeout(() => {
        alertElement.style.opacity = '0';
        alertElement.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            if (document.body.contains(alertElement)) {
                document.body.removeChild(alertElement);
            }
        }, 300);
    }, duration);
}

// 获取URL参数
function getUrlParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);
    
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    
    return params;
}

// 日期格式化
function formatDate(date, format = 'yyyy-MM-dd') {
    if (!date) return '';
    
    // 处理字符串日期
    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    // 处理无效日期
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return format
        .replace('yyyy', year)
        .replace('MM', month)
        .replace('dd', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

// 加载中动画
function showLoading(elementId = 'loading-container') {
    let container = document.getElementById(elementId);
    
    if (!container) {
        container = document.createElement('div');
        container.id = elementId;
        document.body.appendChild(container);
        
        // 设置样式
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.zIndex = '1000';
    }
    
    // 创建加载动画
    let loadingElement = container.querySelector('.loading');
    
    if (!loadingElement) {
        loadingElement = document.createElement('div');
        loadingElement.className = 'loading';
        container.appendChild(loadingElement);
        
        // 设置加载动画样式
        loadingElement.style.width = '40px';
        loadingElement.style.height = '40px';
        loadingElement.style.border = '4px solid #f3f3f3';
        loadingElement.style.borderTop = '4px solid #1a73e8';
        loadingElement.style.borderRadius = '50%';
        loadingElement.style.animation = 'spin 1s linear infinite';
        
        // 添加动画样式
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    container.style.display = 'flex';
}

// 隐藏加载中动画
function hideLoading(elementId = 'loading-container') {
    const container = document.getElementById(elementId);
    if (container) {
        container.style.display = 'none';
    }
}

// 本地存储操作
const storage = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },
    
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    },
    
    clear: function() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    }
};

// AJAX请求封装
async function ajax(url, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        ...options
    };
    
    try {
        const response = await fetch(url, defaultOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }
    } catch (error) {
        console.error('AJAX request failed:', error);
        showAlert('danger', '网络请求失败，请稍后重试');
        throw error;
    }
}
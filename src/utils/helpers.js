/**
 * Utility functions for the application
 */

// Format date to locale string
export const formatDate = (date, locale = 'en-US') => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(locale, options);
  };
  
  // Format currency
  export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  
  // Format file size
  export const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };
  
  // Validate email
  export const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
  
  // Validate phone number
  export const isValidPhone = (phone) => {
    const regex = /^\+?[\d\s-]{10,}$/;
    return regex.test(phone);
  };
  
  // Debounce function
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // Throttle function
  export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };
  
  // Generate unique ID
  export const generateId = (prefix = 'id') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  // Truncate text
  export const truncateText = (text, length = 100) => {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
  };
  
  // Deep clone object
  export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof Object) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
      );
    }
  };
  
  // Flatten object
  export const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k]))
        Object.assign(acc, flattenObject(obj[k], pre + k));
      else
        acc[pre + k] = obj[k];
      return acc;
    }, {});
  };
  
  // URL query params
  export const getQueryParams = (url = window.location.href) => {
    const params = {};
    new URL(url).searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };
  
  // Local storage helpers
  export const storage = {
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
      }
    },
    get: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error('Error reading from localStorage:', e);
        return defaultValue;
      }
    },
    remove: (key) => {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        console.error('Error removing from localStorage:', e);
        return false;
      }
    }
  };
  
  // Color manipulation helpers
  export const colorHelpers = {
    lighten: (color, amount) => {
      const num = parseInt(color.replace('#', ''), 16);
      const r = Math.min(255, ((num >> 16) + amount));
      const g = Math.min(255, (((num >> 8) & 0x00FF) + amount));
      const b = Math.min(255, ((num & 0x0000FF) + amount));
      return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    darken: (color, amount) => {
      const num = parseInt(color.replace('#', ''), 16);
      const r = Math.max(0, ((num >> 16) - amount));
      const g = Math.max(0, (((num >> 8) & 0x00FF) - amount));
      const b = Math.max(0, ((num & 0x0000FF) - amount));
      return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  };
  
  // Download file
  export const downloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Image helpers
  export const imageHelpers = {
    loadImage: (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    },
    resizeImage: async (file, maxWidth = 800, maxHeight = 600) => {
      const img = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      let width = img.width;
      let height = img.height;
  
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }
  
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
  
      return new Promise((resolve) => {
        canvas.toBlob(resolve, file.type);
      });
    }
  };
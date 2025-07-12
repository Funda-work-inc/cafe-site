// ===============================
// 🌟 Le Ciel étoilé Café - 動的モーション
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    
    // 🎭 パララックス効果
    function initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }

    // ✨ スクロール時フェードイン
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // アニメーション対象要素を監視
        document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
            observer.observe(el);
        });
    }

    // 🌊 マウスフォロー効果
    function initMouseFollow() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // ホバー時のカーソル変化
        document.querySelectorAll('a, button, .clickable').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 🎨 文字タイピング効果
    function initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.opacity = '1';
            
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
        });
    }

    // 🌟 キラキラ効果
    function createSparkles() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'sparkle-container';
        document.body.appendChild(sparkleContainer);

        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            
            sparkleContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }

        setInterval(createSparkle, 500);
    }

    // 🎵 スムーススクロール
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // 🌈 カラーチェンジ効果
    function initColorWave() {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            document.documentElement.style.setProperty('--accent-wave', `hsl(${hue}, 70%, 60%)`);
        }, 100);
    }

    // 📱 レスポンシブメニュー
    function initMobileMenu() {
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // 🎪 ギャラリーホバー効果
    function initGalleryEffects() {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(2deg)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // 🌸 フローティング要素
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.float');
        
        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`;
        });
    }

    // 🎊 初期化実行
    initParallax();
    initScrollAnimations();
    initMouseFollow();
    initSmoothScroll();
    initMobileMenu();
    initGalleryEffects();
    initFloatingElements();
    createSparkles();
    
    // ページロード完了後の特別効果
    setTimeout(() => {
        initTypingEffect();
        initColorWave();
    }, 1000);

    // 📱 ハンバーガーメニュー初期化
    initHamburgerMenu();
    
    console.log('✨ Le Ciel étoilé Café - 動的モーション初期化完了！ ✨');
});

// 📱 ハンバーガーメニュー機能
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    if (!hamburger || !nav) return;
    
    // ハンバーガーボタンクリック
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // ナビリンククリック時にメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // 背景クリック時にメニューを閉じる
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target)) {
            closeMenu();
        }
    });
    
    // ESCキー時にメニューを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // ウィンドウリサイズ時の処理
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        
        // ボディのスクロール制御
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 🖼️ ライトボックス機能
function openLightbox(imageSrc) {
    event.stopPropagation();
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    
    setTimeout(() => {
        lightbox.classList.add('show');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    lightbox.classList.remove('show');
    
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
    
    document.body.style.overflow = 'auto';
}

// ライトボックスのイベントリスナー設定
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        // 背景クリックで閉じる
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // 閉じるボタン
        const closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeLightbox();
            });
        }
    }
    
    // ギャラリーアイテムのクリックイベント
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const img = this.querySelector('img');
            if (img) {
                const imgSrc = img.src;
                // 同じ画像をそのまま表示
                openLightbox(imgSrc);
            }
        });
    });
});

// ESCキーでライトボックスを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// 🎨 追加のインタラクション効果
document.addEventListener('click', function(e) {
    // クリック時のリップル効果
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});
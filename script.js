function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const startX = Math.random() * 50;
        particle.style.left = `${startX}vw`;
        
        const delay = Math.random() * 25;
        particle.style.animationDelay = `${delay}s`;
        
        const duration = Math.random() * 10 + 25;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    animateOnScroll();
});


function animateOnScroll() {
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const position = title.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            title.classList.add('animated');
        }
    });
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const position = card.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 200);
        }
    });
    
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        const position = member.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            setTimeout(() => {
                member.classList.add('visible');
            }, index * 200);
        }
    });
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        const position = item.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.querySelector('input[name="eventType"]:checked');
    const shootingType = document.querySelector('input[name="shootingType"]:checked');
    const eventDate = document.getElementById('eventDate').value;
    const location = document.getElementById('location').value;
    
    if (!name.trim()) {
        alert('يرجى إدخال الاسم الكامل');
        return false;
    }
    
    if (!phone.trim()) {
        alert('يرجى إدخال رقم الجوال');
        return false;
    }
    
    if (!eventType) {
        alert('يرجى اختيار نوع المناسبة');
        return false;
    }
    
    if (!shootingType) {
        alert('يرجى اختيار نوع التصوير');
        return false;
    }
    
    if (!eventDate) {
        alert('يرجى اختيار تاريخ المناسبة');
        return false;
    }
    
    if (!location.trim()) {
        alert('يرجى إدخال مكان المناسبة');
        return false;
    }
    
    return true;
}


function sendWhatsAppMessage() {
    if (!validateForm()) return;
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.querySelector('input[name="eventType"]:checked').value;
    const shootingType = document.querySelector('input[name="shootingType"]:checked').value;
    const eventDate = document.getElementById('eventDate').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;
    
    const text = ` *حجز جديد - سمارت ميديا*

 *المعلومات الشخصية:*
• الاسم: ${name}
• رقم الجوال: ${phone}

 *تفاصيل المناسبة:*
• نوع المناسبة: ${eventType}
• نوع التصوير: ${shootingType}
• التاريخ: ${eventDate}
• المكان: ${location}

 *ملاحظات إضافية:*
${message ? message : 'لا توجد ملاحظات إضافية'}

 *سمارت ميديا - تصوير فاخر للأعراس والمناسبات*`;

    const whatsappNumber = '967736206408';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
}


function sendSMSMessage() {
    if (!validateForm()) return;
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.querySelector('input[name="eventType"]:checked').value;
    const shootingType = document.querySelector('input[name="shootingType"]:checked').value;
    const eventDate = document.getElementById('eventDate').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;
    
    const text = `حجز جديد - سمارت ميديا

الاسم: ${name}
رقم الجوال: ${phone}
نوع المناسبة: ${eventType}
نوع التصوير: ${shootingType}
تاريخ المناسبة: ${eventDate}
مكان المناسبة: ${location}
${message ? `تفاصيل إضافية: ${message}` : ''}`;

    const phoneNumber = '967736206408';
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(text)}`;
    
    window.open(smsUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateOnScroll();
    
 
    const whatsappBtn = document.getElementById('whatsappBtn');
    const smsBtn = document.getElementById('smsBtn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', sendWhatsAppMessage);
    }
    
    if (smsBtn) {
        smsBtn.addEventListener('click', sendSMSMessage);
    }
    

    const navLinks = document.querySelectorAll('.footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                scrollToSection(targetId.substring(1));
            }
        });
    });
    

    const dateInput = document.getElementById('eventDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});
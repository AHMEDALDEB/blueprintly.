// التسجيل
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value
    };
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert('حدث خطأ أثناء التسجيل');
    }
  });
  
  // عرض الدورات
  async function loadCourses() {
    const response = await fetch('/api/courses');
    const courses = await response.json();
    
    const coursesDiv = document.getElementById('courses');
    courses.forEach(course => {
      coursesDiv.innerHTML += `
        <div class="course-card">
          <h3>${course.title}</h3>
          <button onclick="startCourse('${course._id}')">ابدأ الدورة</button>
        </div>
      `;
    });
  }
  
  // واجهة الاختبار
  let examTimer;
  function startExam(examData) {
    let timeLeft = examData.questions.length * 70;
    
    examTimer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = 
        `${Math.floor(timeLeft/60)}:${(timeLeft%60).toString().padStart(2,'0')}`;
      
      if(timeLeft <= 0) submitExam();
    }, 1000);
  
    // عرض الأسئلة
    examData.questions.forEach((q, i) => {
      document.getElementById('questions').innerHTML += `
        <div class="question">
          <h4>${i+1}. ${q.text}</h4>
          ${q.options.map((opt, j) => `
            <label>
              <input type="radio" name="q${i}" value="${opt}">
              ${opt}
            </label>
          `).join('')}
        </div>
      `;
    });
  }
  
  async function submitExam() {
    clearInterval(examTimer);
    const answers = [];
    
    examData.questions.forEach((_, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      answers.push(selected ? selected.value : null);
    });
  
    // إرسال النتائج
    const response = await fetch('/api/submit-exam', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ answers })
    });
  
    const result = await response.json();
    alert(`نتيجتك: ${result.score}% - ${result.passed ? 'ناجح' : 'راسب'}`);
  }
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, AlertTriangle, Lock, Key, Smartphone, 
  Globe, Mail, EyeOff, UserX, MessageSquareWarning, 
  CheckCircle, HelpCircle, ShieldCheck, PhoneCall,
  ChevronDown, ChevronUp, AlertCircle, Link as LinkIcon,
  Download, Fingerprint, RefreshCw, LogOut,
  Users, Camera, MessageCircle, Video, Send, Ghost, X,
  BarChart3, Info
} from 'lucide-react';

// مكون لعمل حركة ظهور خفيفة (Fade In Animation)
const FadeIn = ({ children, delay = 0, className = "", onClick, whileHover, whileTap }: { children: React.ReactNode, delay?: number, className?: string, onClick?: () => void, key?: React.Key, whileHover?: any, whileTap?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", damping: 20, stiffness: 100, delay }}
    className={className}
    onClick={onClick}
    whileHover={whileHover}
    whileTap={whileTap}
  >
    {children}
  </motion.div>
);

export default function App() {
  // حالة أداة فحص كلمة السر
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  // حالة الاختبار التفاعلي
  const [quizState, setQuizState] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  
  // حالة الأسئلة الشائعة
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // حالة النافذة المنبثقة (Modal)
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // دالة إغلاق النافذة المنبثقة
  const closeModal = () => setActiveModal(null);

  // دالة فحص قوة كلمة السر
  const checkPassword = (val: string) => {
    setPassword(val);
    if (!val) {
      setStrength(0);
      setFeedback('');
      return;
    }
    let score = 0;
    if (val.length >= 8) score++;
    if (val.length >= 12) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    
    setStrength(score);
    if (score <= 1) setFeedback('ضعيفة جداً');
    else if (score === 2) setFeedback('ضعيفة');
    else if (score === 3) setFeedback('متوسطة');
    else if (score >= 4) setFeedback('قوية');
  };

  // دالة لتحديد لون مؤشر قوة كلمة السر
  const getStrengthColor = () => {
    if (strength === 0) return 'bg-slate-200';
    if (strength <= 1) return 'bg-red-500';
    if (strength === 2) return 'bg-orange-500';
    if (strength === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden">
      
      {/* Header */}
      <header className="bg-blue-950 text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-25 h-25 flex items-center justify-center">
              <img src="public/logo.png" alt="شعار مؤسسة نون" className="w-full h-full object-contain" />
            </div>
           <span className="font-bold text-xl">مؤسسة نون</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="/" className="text-blue-400 font-bold">الرئيسية</a></li>
              <li><a href="/about-noon.html" className="hover:text-blue-300 transition-colors">عن المؤسسة</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative bg-blue-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:30px_30px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-right"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                السوشيال ميديا بين <span className="text-blue-400">الفرصة</span> والخطر
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                دليل عملي لحماية حساباتك من الاختراق والابتزاز الإلكتروني. تعلم كيف تتصفح بأمان وتحمي خصوصيتك.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('importance')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-blue-500/30"
              >
                ابدأ التعلم الآن
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <Shield className="w-64 h-64 text-blue-400 opacity-80" />
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Lock className="w-24 h-24 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. لماذا الأمن الرقمي مهم */}
      <section id="importance" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-blue-950 mb-12">لماذا الأمن الرقمي مهم؟</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md cursor-pointer text-center" onClick={() => setActiveModal('millions')}>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">ملايين الاختراقات</h3>
              <p className="text-slate-600">ملايين الحسابات تُخترق سنويًا حول العالم بسبب الإهمال في تطبيق معايير الأمان.</p>
              <div className="mt-4 text-blue-500 text-sm font-bold flex items-center justify-center gap-1">
                <BarChart3 className="w-4 h-4" /> عرض الإحصائيات
              </div>
            </FadeIn>
            <FadeIn delay={0.2} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md cursor-pointer text-center" onClick={() => setActiveModal('weak-passwords')}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">كلمات سر ضعيفة</h3>
              <p className="text-slate-600">أغلب الاختراقات تحدث بسبب استخدام كلمات سر ضعيفة أو مكررة في عدة مواقع.</p>
              <div className="mt-4 text-blue-500 text-sm font-bold flex items-center justify-center gap-1">
                <Info className="w-4 h-4" /> مقارنة الكلمات
              </div>
            </FadeIn>
            <FadeIn delay={0.3} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md cursor-pointer text-center" onClick={() => setActiveModal('sharing')}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">مشاركة المعلومات</h3>
              <p className="text-slate-600">مشاركة المعلومات الشخصية بكثرة على السوشيال ميديا تزيد من مخاطر استهدافك.</p>
              <div className="mt-4 text-blue-500 text-sm font-bold flex items-center justify-center gap-1">
                <Info className="w-4 h-4" /> اعرف المخاطر
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. أشهر منصات السوشيال ميديا */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-blue-950 mb-4">أشهر منصات السوشيال ميديا</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">كل منصة لها طبيعتها الخاصة ومخاطرها المختلفة. الوعي بطبيعة المنصة هو أول خطوات الحماية.</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Facebook', icon: Users, id: 'facebook' },
              { name: 'Instagram', icon: Camera, id: 'instagram' },
              { name: 'WhatsApp', icon: MessageCircle, id: 'whatsapp' },
              { name: 'TikTok', icon: Video, id: 'tiktok' },
              { name: 'Telegram', icon: Send, id: 'telegram' },
              { name: 'Snapchat', icon: Ghost, id: 'snapchat' }
            ].map((platform, i) => (
              <FadeIn key={platform.name} delay={i * 0.1} whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center justify-center gap-3 border border-slate-100 hover:border-blue-300 hover:shadow-md transition-colors cursor-pointer" onClick={() => setActiveModal(`platform-${platform.id}`)}>
                <platform.icon className="w-10 h-10 text-blue-500" />
                <span className="font-bold text-slate-700 dir-ltr" dir="ltr">{platform.name}</span>
                <span className="text-xs text-blue-500 font-medium mt-1">طرق الاختراق والحماية</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. طرق اختراق الحسابات */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">كيف يتم اختراق الحسابات؟</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 hover:bg-blue-800 transition-colors cursor-pointer group" onClick={() => setActiveModal('hack-phishing')}>
              <LinkIcon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">التصيد الاحتيالي (Phishing)</h3>
              <p className="text-blue-200 text-sm mb-4">خداع المستخدم بصفحات تسجيل دخول مزيفة لسرقة بياناته.</p>
              <span className="text-blue-300 text-xs font-bold flex items-center gap-1"><Info className="w-3 h-3" /> كيف تكتشفه وتدافع عنه؟</span>
            </FadeIn>
            <FadeIn delay={0.2} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 hover:bg-blue-800 transition-colors cursor-pointer group" onClick={() => setActiveModal('hack-social')}>
              <UserX className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">الهندسة الاجتماعية</h3>
              <p className="text-blue-200 text-sm mb-4">التلاعب النفسي بالضحية لجعله يفشي معلوماته السرية بنفسه.</p>
              <span className="text-blue-300 text-xs font-bold flex items-center gap-1"><Info className="w-3 h-3" /> كيف تكتشفه وتدافع عنه؟</span>
            </FadeIn>
            <FadeIn delay={0.3} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 hover:bg-blue-800 transition-colors cursor-pointer group" onClick={() => setActiveModal('hack-links')}>
              <AlertCircle className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">الروابط المزيفة</h3>
              <p className="text-blue-200 text-sm mb-4">إرسال روابط مغرية (مسابقات، فضائح) تؤدي لبرمجيات خبيثة.</p>
              <span className="text-blue-300 text-xs font-bold flex items-center gap-1"><Info className="w-3 h-3" /> كيف تكتشفه وتدافع عنه؟</span>
            </FadeIn>
            <FadeIn delay={0.4} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 hover:bg-blue-800 transition-colors cursor-pointer group" onClick={() => setActiveModal('hack-apps')}>
              <Download className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">التطبيقات الخبيثة</h3>
              <p className="text-blue-200 text-sm mb-4">تطبيقات تطلب صلاحيات واسعة لسرقة البيانات من هاتفك.</p>
              <span className="text-blue-300 text-xs font-bold flex items-center gap-1"><Info className="w-3 h-3" /> كيف تكتشفه وتدافع عنه؟</span>
            </FadeIn>
            <FadeIn delay={0.5} whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-blue-900/50 p-6 rounded-xl border border-blue-800 hover:bg-blue-800 transition-colors cursor-pointer group" onClick={() => setActiveModal('hack-brute')}>
              <Fingerprint className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">تخمين كلمات السر</h3>
              <p className="text-blue-200 text-sm mb-4">استخدام برامج لتجربة آلاف كلمات السر، خاصة الضعيفة منها.</p>
              <span className="text-blue-300 text-xs font-bold flex items-center gap-1"><Info className="w-3 h-3" /> كيف تكتشفه وتدافع عنه؟</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. التصيد الاحتيالي & 6. الهندسة الاجتماعية */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 h-full">
                <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6" /> التصيد الاحتيالي
                </h2>
                <div className="bg-white p-4 rounded-lg border border-red-200 mb-6 shadow-sm">
                  <p className="text-sm text-slate-500 mb-2 dir-ltr text-right" dir="ltr">From: support@faceb00k-security.com</p>
                  <p className="font-bold text-slate-800 mb-2">تحذير أمني عاجل!</p>
                  <p className="text-slate-600 mb-4">تم إغلاق حسابك بسبب نشاط مشبوه. اضغط هنا لاستعادته فوراً.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm pointer-events-none opacity-80">تأكيد الحساب</button>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  الرابط يأخذك لصفحة تشبه الموقع الأصلي تماماً. بمجرد كتابة كلمة السر، تذهب مباشرة للمخترق بدلاً من تسجيل الدخول.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 h-full">
                <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                  <MessageSquareWarning className="w-6 h-6" /> الهندسة الاجتماعية
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-semibold">
                  المخترق لا يخترق جهازك، بل يخترق عقلك! يخدعك لتعطيه المعلومات بنفسك.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                    <Smartphone className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span><strong>طلب كود التحقق:</strong> "وصلك كود بالخطأ على رقمك، ممكن تبعتهولي؟"</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                    <UserX className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span><strong>حساب مزيف:</strong> شخص ينتحل صفة خدمة العملاء ويطلب بياناتك.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span><strong>رسالة من صديق:</strong> صديق تم اختراق حسابه يطلب منك أموالاً أو يرسل رابطاً.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. انتحال الشخصية & 8. الابتزاز الإلكتروني */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                <EyeOff className="w-6 h-6 text-blue-500" /> انتحال الشخصية
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                هو إنشاء حساب مزيف باستخدام اسمك وصورتك الشخصية ومعلوماتك المتاحة للعامة.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">يستخدم المخترقون هذا الحساب في:</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> الاحتيال المالي على أصدقائك.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> الإساءة لسمعتك بنشر محتوى غير لائق.</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> خداع الأصدقاء للحصول على معلومات إضافية.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" /> الابتزاز الإلكتروني
              </h2>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-red-500">
                  <p className="font-bold text-slate-800">تهديد بنشر صور خاصة</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-red-500">
                  <p className="font-bold text-slate-800">تهديد بنشر محادثات سرية</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-red-500">
                  <p className="font-bold text-slate-800">طلب أموال مقابل عدم النشر</p>
                </div>
              </div>
              <div className="bg-red-100 text-red-900 p-6 rounded-2xl font-bold text-center border border-red-200">
                لا تستجب للمبتز أبداً! الدفع لن يوقفه بل سيشجعه على طلب المزيد. قم بحظر الحساب والإبلاغ فوراً للجهات المختصة.
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. علامات اختراق الحساب & 10. حماية الحساب */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8 text-blue-100">علامات اختراق حسابك</h2>
              <ul className="space-y-4">
                {[
                  'رسائل أُرسلت من حسابك لم تقم بكتابتها.',
                  'تنبيهات بتسجيل دخول من أجهزة أو أماكن غريبة.',
                  'تغيير مفاجئ في كلمة السر أو البريد المرتبط.',
                  'منشورات أو إعجابات لم تقم بها تظهر على صفحتك.',
                  'أصدقاء يخبرونك بتلقيهم رسائل غريبة منك.'
                ].map((sign, i) => (
                  <li key={i} className="flex items-center gap-4 bg-blue-900/40 p-4 rounded-xl border border-blue-800/50">
                    <AlertCircle className="w-6 h-6 text-orange-400 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold mb-8 text-blue-100">القواعد الذهبية للحماية</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-400/30 text-center hover:bg-blue-500/20 transition-colors">
                  <Key className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">كلمة سر قوية</h3>
                  <p className="text-sm text-blue-200">طويلة، معقدة، وغير مكررة.</p>
                </div>
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-400/30 text-center hover:bg-blue-500/20 transition-colors">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">التحقق الثنائي (2FA)</h3>
                  <p className="text-sm text-blue-200">خط الدفاع الأقوى لحساباتك.</p>
                </div>
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-400/30 text-center hover:bg-blue-500/20 transition-colors">
                  <LinkIcon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">احذر الروابط</h3>
                  <p className="text-sm text-blue-200">لا تضغط على روابط من مصادر مجهولة.</p>
                </div>
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-400/30 text-center hover:bg-blue-500/20 transition-colors">
                  <RefreshCw className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">تحديث مستمر</h3>
                  <p className="text-sm text-blue-200">حدث التطبيقات ونظام التشغيل دائماً.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 11. اختبار قوة كلمة السر & 12. فحص تسريب الإيميل */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-blue-500" /> اختبر قوة كلمة السر
                </h2>
                <div className="mb-6">
                  <input 
                    type="text" 
                    placeholder="أدخل كلمة سر لتجربتها..." 
                    value={password}
                    onChange={(e) => checkPassword(e.target.value)}
                    className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left dir-ltr font-sans"
                    dir="ltr"
                  />
                </div>
                <div className="mb-4 flex gap-2 h-2" dir="ltr">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div 
                      key={level} 
                      className={`flex-1 rounded-full transition-colors duration-300 ${strength >= level ? getStrengthColor() : 'bg-slate-200'}`}
                    ></div>
                  ))}
                </div>
                <p className="text-center font-bold text-lg mb-6 h-8 text-slate-700">
                  {feedback}
                </p>
                <div className="text-sm text-slate-600 bg-white p-4 rounded-xl border border-slate-100">
                  <p className="mb-2 font-bold text-slate-800">نصائح لكلمة سر قوية:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>أكثر من 12 حرف.</li>
                    <li>تحتوي حروف كبيرة وصغيرة.</li>
                    <li>تحتوي أرقام ورموز (!@#$%).</li>
                  </ul>
                </div>
                <div className="mt-6 text-center">
                  <a href="https://password.kaspersky.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm flex items-center justify-center gap-1 font-medium">
                    أداة كاسبرسكي لفحص كلمات السر <LinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-500" /> هل تم تسريب إيميلك؟
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  العديد من المواقع تتعرض للاختراق ويتم تسريب بيانات مستخدميها (الإيميل وكلمة السر) على الإنترنت المظلم. يمكنك فحص ما إذا كان بريدك الإلكتروني ضمن هذه التسريبات.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                  <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-4">موقع Have I Been Pwned</h3>
                  <a 
                    href="https://haveibeenpwned.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
                  >
                    افحص إيميلك الآن
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 13. ماذا تفعل إذا تم اختراق حسابك & 14. الإبلاغ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-2xl font-bold text-blue-950 mb-8">ماذا تفعل إذا تم اختراق حسابك؟</h2>
              <div className="space-y-4">
                {[
                  { icon: Key, text: 'حاول تغيير كلمة السر فوراً إذا كان لا يزال بإمكانك الدخول.' },
                  { icon: LogOut, text: 'قم بتسجيل الخروج من جميع الأجهزة (Log out of all sessions).' },
                  { icon: ShieldCheck, text: 'فعّل التحقق بخطوتين (2FA) فور استعادة الحساب.' },
                  { icon: AlertTriangle, text: 'أبلغ المنصة عن الاختراق عبر روابط الدعم المخصصة.' },
                  { icon: MessageSquareWarning, text: 'حذّر أصدقاءك وعائلتك حتى لا يقعوا ضحية للمخترق.' }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-lg text-blue-600 font-bold shrink-0">{i + 1}</div>
                    <step.icon className="w-6 h-6 text-slate-400 shrink-0 hidden sm:block" />
                    <span className="text-slate-700 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-blue-950 text-white p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-10 -top-10 opacity-10">
                  <Shield className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <PhoneCall className="w-6 h-6 text-blue-400" /> الإبلاغ عن الجرائم الإلكترونية (مصر)
                  </h2>
                  <p className="text-blue-200 mb-8 leading-relaxed">
                    الابتزاز الإلكتروني واختراق الحسابات هي جرائم يعاقب عليها القانون المصري بشدة. لا تتردد في الإبلاغ.
                  </p>
                  
                  <div className="bg-blue-900/50 p-6 rounded-2xl border border-blue-800 mb-6">
                    <p className="text-sm text-blue-300 mb-1">الجهة المختصة:</p>
                    <p className="font-bold text-lg">الإدارة العامة لتكنولوجيا المعلومات – وزارة الداخلية</p>
                  </div>
                  
                  <div className="bg-blue-500 p-6 rounded-2xl text-center flex flex-col items-center justify-center shadow-lg">
                    <p className="text-blue-100 mb-2 font-medium">رقم الخط الساخن</p>
                    <p className="text-5xl font-bold tracking-wider dir-ltr" dir="ltr">108</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 15. الاختبار التفاعلي */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
              <h2 className="text-3xl font-bold text-blue-950 mb-8">اختبر معلوماتك</h2>
              
              {quizState === 'idle' ? (
                <div>
                  <p className="text-xl text-slate-700 mb-8 font-medium">هل كلمة السر <span className="font-mono bg-slate-200 px-2 py-1 rounded text-red-600" dir="ltr">123456</span> آمنة للاستخدام؟</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuizState('incorrect')}
                      className="bg-white border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 text-slate-700 font-bold py-4 px-8 rounded-xl transition-colors"
                    >
                      نعم، سهلة التذكر
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuizState('correct')}
                      className="bg-white border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 text-slate-700 font-bold py-4 px-8 rounded-xl transition-colors"
                    >
                      لا، ضعيفة جداً
                    </motion.button>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`p-8 rounded-2xl ${quizState === 'correct' ? 'bg-green-100 text-green-900 border border-green-200' : 'bg-red-100 text-red-900 border border-red-200'}`}
                >
                  {quizState === 'correct' ? (
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-600" />
                  )}
                  <h3 className="text-2xl font-bold mb-2">
                    {quizState === 'correct' ? 'إجابة صحيحة!' : 'إجابة خاطئة!'}
                  </h3>
                  <p className="mb-6 font-medium">
                    كلمة السر <span dir="ltr">123456</span> هي من أكثر كلمات السر استخداماً واختراقاً في العالم. يتم اختراقها في أقل من ثانية.
                  </p>
                  <button 
                    onClick={() => setQuizState('idle')}
                    className="bg-white/50 hover:bg-white text-current font-bold py-2 px-6 rounded-lg transition-colors border border-current/20"
                  >
                    إعادة الاختبار
                  </button>
                </motion.div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 16. الأسئلة الشائعة */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-blue-950 mb-12 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-500" /> الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              {[
                { 
                  q: 'هل يمكن اختراق حسابي بمجرد فتح رسالة؟', 
                  a: 'في الغالب لا، الاختراق يحدث عندما تضغط على رابط مشبوه داخل الرسالة وتقوم بإدخال بياناتك في صفحة مزيفة، أو عند تحميل ملف خبيث على جهازك.' 
                },
                { 
                  q: 'هل التحقق الثنائي (2FA) يمنع الاختراق تماماً؟', 
                  a: 'يقلل التحقق الثنائي من نسبة الاختراق بشكل كبير جداً (أكثر من 99%)، لكن يجب أن تظل حذراً من هجمات التصيد المتقدمة التي قد تطلب منك إدخال كود التحقق أيضاً.' 
                },
                { 
                  q: 'هل استخدام شبكات الواي فاي العامة (المقاهي، المطارات) آمن؟', 
                  a: 'لا، شبكات الواي فاي المفتوحة غير آمنة وقد تسمح للمخترقين باعتراض بياناتك. تجنب إدخال كلمات سر أو بيانات بنكية أثناء استخدامها، أو استخدم تطبيق VPN موثوق.' 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-right p-6 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    {faq.q}
                    <motion.div
                      animate={{ rotate: activeFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 shrink-0 ${activeFaq === i ? 'text-blue-500' : 'text-slate-400'}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 17. الخاتمة */}
      <footer className="bg-blue-950 text-white py-12 text-center border-t border-blue-900">
        <div className="container mx-auto px-6">
          <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">الأمن الرقمي مسؤولية كل مستخدم للإنترنت</h2>
          <p className="text-blue-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            الوعي هو خط الدفاع الأول. شارك هذه المعلومات مع أصدقائك وعائلتك لحمايتهم من المخاطر الرقمية.
          </p>
          <div className="w-16 h-1 bg-blue-800 mx-auto mb-8 rounded-full"></div>
          <p className="text-sm text-blue-400">
            © {new Date().getFullYear()} دليل الأمن الرقمي. تم التصميم لأغراض التوعية والتدريب.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" 
            onClick={closeModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  {activeModal === 'millions' && <><BarChart3 className="w-6 h-6 text-red-500" /> إحصائيات الاختراقات العالمية</>}
                  {activeModal === 'weak-passwords' && <><Key className="w-6 h-6 text-orange-500" /> كلمات السر: القوية مقابل الضعيفة</>}
                  {activeModal === 'sharing' && <><Globe className="w-6 h-6 text-blue-500" /> مخاطر مشاركة المعلومات</>}
                  {activeModal.startsWith('platform-') && <><Shield className="w-6 h-6 text-blue-500" /> طرق اختراق المنصات وحمايتها</>}
                  {activeModal.startsWith('hack-') && <><AlertTriangle className="w-6 h-6 text-red-500" /> تكتيكات الخداع والدفاع</>}
                </h3>
                <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
              
              {activeModal === 'millions' && (
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">لغة الأرقام توضح حجم الخطر الحقيقي الذي يواجه مستخدمي الإنترنت يومياً. إليك بعض الإحصائيات الواقعية:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                      <p className="text-3xl font-bold text-red-600 mb-2 dir-ltr" dir="ltr">2,200</p>
                      <p className="text-sm text-slate-700 font-medium">هجوم سيبراني يحدث يومياً (بمعدل هجوم كل 39 ثانية)</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                      <p className="text-3xl font-bold text-orange-600 mb-2 dir-ltr" dir="ltr">8.5 Billion</p>
                      <p className="text-sm text-slate-700 font-medium">سجل بيانات تم تسريبه عالمياً في عام واحد</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                      <p className="text-3xl font-bold text-blue-600 mb-2 dir-ltr" dir="ltr">81%</p>
                      <p className="text-sm text-slate-700 font-medium">من الاختراقات سببها كلمات سر ضعيفة أو مسروقة</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-center">
                      <p className="text-3xl font-bold text-slate-700 mb-2 dir-ltr" dir="ltr">98%</p>
                      <p className="text-sm text-slate-700 font-medium">من الهجمات تعتمد على الهندسة الاجتماعية (خداع البشر)</p>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'weak-passwords' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-red-50 p-5 rounded-xl border border-red-100">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><X className="w-5 h-5" /> كلمة السر الضعيفة</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <span className="font-bold">أمثلة:</span> <span dir="ltr" className="font-mono bg-white px-1 rounded">123456</span>, <span dir="ltr" className="font-mono bg-white px-1 rounded">password</span>, <span dir="ltr" className="font-mono bg-white px-1 rounded">ahmed1990</span></li>
                        <li>• <span className="font-bold">التركيب:</span> قصيرة، تحتوي على أسماء شخصية، تواريخ ميلاد، أو أرقام متسلسلة.</li>
                        <li>• <span className="font-bold">وقت الاختراق:</span> أقل من ثانية واحدة باستخدام برامج التخمين.</li>
                        <li>• <span className="font-bold">الخطر:</span> إذا تم تسريبها من موقع واحد، سيجربها المخترق على باقي حساباتك.</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-green-50 p-5 rounded-xl border border-green-100">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> كلمة السر القوية</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <span className="font-bold">أمثلة:</span> <span dir="ltr" className="font-mono bg-white px-1 rounded">xT9#mP2$vL!k</span>, <span dir="ltr" className="font-mono bg-white px-1 rounded">BlueCoffee72@Sky</span></li>
                        <li>• <span className="font-bold">التركيب:</span> 12 حرفاً على الأقل، مزيج من (حروف كبيرة، صغيرة، أرقام، رموز).</li>
                        <li>• <span className="font-bold">وقت الاختراق:</span> قد يستغرق مئات أو آلاف السنين لفك تشفيرها.</li>
                        <li>• <span className="font-bold">الحل الأمثل:</span> استخدم "مدير كلمات المرور" (Password Manager) لإنشاء وحفظ كلمات سر معقدة لكل موقع.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'sharing' && (
                <div className="space-y-4 text-slate-700">
                  <p className="font-medium">كل معلومة تشاركها على الإنترنت هي قطعة بازل يستخدمها المخترق لرسم صورة كاملة عنك واستغلالها.</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">معلومات احذر من مشاركتها علناً:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> <strong>تاريخ الميلاد الكامل:</strong> يُستخدم للتحقق من هويتك في البنوك والخدمات.</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> <strong>رقم الهاتف والعنوان:</strong> يعرضك للمضايقات والابتزاز وتتبع موقعك.</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> <strong>خطط السفر الحالية:</strong> إعلان أن منزلك فارغ يعرضه للسرقة.</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> <strong>صور تظهر تفاصيل حساسة:</strong> مثل بطاقة الهوية، تذاكر الطيران (الباركود)، أو شاشة الكمبيوتر في العمل.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-facebook' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-600 flex items-center gap-2"><Users className="w-6 h-6" /> Facebook</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">روابط التصيد عبر الماسنجر (رسائل مثل "هل هذا أنت في الفيديو؟")، التطبيقات والألعاب التي تطلب صلاحيات الوصول لحسابك، والصفحات المزيفة التي تنتحل صفة الدعم الفني.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>تفعيل المصادقة الثنائية (2FA) باستخدام تطبيق مثل Google Authenticator.</li>
                      <li>مراجعة الأجهزة المتصلة بحسابك بانتظام من الإعدادات.</li>
                      <li>عدم النقر على الروابط الغريبة حتى لو كانت من صديق (قد يكون حسابه مخترقاً).</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-instagram' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-pink-600 flex items-center gap-2"><Camera className="w-6 h-6" /> Instagram</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">رسائل مزيفة تدعي انتهاك حقوق النشر وتطلب تسجيل الدخول للاعتراض، عروض التعاون الوهمية من علامات تجارية، وروابط "التصويت لي في مسابقة".</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>لا تدخل كلمة سر انستجرام في أي رابط خارجي يُرسل لك في الرسائل.</li>
                      <li>تحقق من رسائل البريد الإلكتروني الرسمية من انستجرام عبر الإعدادات (Emails from Instagram).</li>
                      <li>تفعيل المصادقة الثنائية.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-whatsapp' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-green-500 flex items-center gap-2"><MessageCircle className="w-6 h-6" /> WhatsApp</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">خداع المستخدم لإرسال كود التفعيل (SMS) المكون من 6 أرقام. المخترق يدعي أنه أرسل الكود بالخطأ أو ينتحل صفة الدعم الفني أو شخص من مجموعة مشتركة.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li><strong>أهم خطوة:</strong> تفعيل "التحقق بخطوتين" (Two-step verification) من الإعدادات وإنشاء رقم تعريف شخصي (PIN).</li>
                      <li>لا تشارك كود الـ SMS المكون من 6 أرقام مع أي شخص، حتى لو كان أقرب أصدقائك.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-tiktok' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-slate-900 flex items-center gap-2"><Video className="w-6 h-6" /> TikTok</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">روابط خبيثة في البايو (Bio)، تطبيقات مزيفة تدعي زيادة المتابعين تطلب تسجيل الدخول بحسابك، ورسائل تصيد تدعي توثيق الحساب (العلامة الزرقاء).</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>تجنب استخدام تطبيقات "زيادة المتابعين" التابعة لجهات خارجية.</li>
                      <li>لا تضغط على الروابط المشبوهة في التعليقات أو البايو.</li>
                      <li>تفعيل التحقق بخطوتين.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-telegram' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-500 flex items-center gap-2"><Send className="w-6 h-6" /> Telegram</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">البوتات (Bots) الخبيثة التي تطلب صلاحيات واسعة، الروابط الملغمة في المجموعات العامة، وسرقة جلسات تسجيل الدخول عبر برمجيات خبيثة على الكمبيوتر.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>إخفاء رقم هاتفك من إعدادات الخصوصية (اجعله مرئياً لجهات الاتصال فقط أو لا أحد).</li>
                      <li>تفعيل التحقق بخطوتين (كلمة مرور إضافية السحابة).</li>
                      <li>عدم تحميل ملفات تنفيذية (.exe, .apk) من قنوات غير موثوقة.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'platform-snapchat' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-yellow-500 flex items-center gap-2"><Ghost className="w-6 h-6" /> Snapchat</h4>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 mb-1">أشهر طرق الاختراق:</p>
                    <p className="text-sm">تطبيقات الطرف الثالث غير المصرح بها (مثل تطبيقات حفظ السنابات سراً) التي تسرق بيانات الدخول، ورسائل التصيد التي تهدد بحذف الحساب.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="font-bold text-green-800 mb-1">كيف تحمي نفسك:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>لا تستخدم أي تطبيقات خارجية تطلب تسجيل الدخول بحساب سناب شات.</li>
                      <li>تفعيل المصادقة الثنائية (Login Verification).</li>
                      <li>تجاهل الرسائل التي تطلب منك تأكيد حسابك عبر روابط خارجية.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'hack-phishing' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-900 mb-4">التصيد الاحتيالي (Phishing)</h4>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <p className="font-bold text-red-600 mb-2">تكتيك الخداع:</p>
                    <p className="text-sm mb-4">يصمم المخترق صفحة ويب تبدو مطابقة تماماً لصفحة تسجيل الدخول (فيسبوك، بنك، بريد إلكتروني). يرسل لك رابطاً مع رسالة تثير القلق (تم اختراق حسابك!) أو الطمع (لقد ربحت!). بمجرد إدخال بياناتك، تُرسل مباشرة للمخترق.</p>
                    
                    <p className="font-bold text-green-600 mb-2">كيف تكتشفه وتدافع عنه؟</p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>افحص الرابط (URL):</strong> هل هو <span dir="ltr" className="font-mono bg-white px-1">facebook.com</span> أم <span dir="ltr" className="font-mono bg-white px-1">faceb00k-login.com</span>؟ الحروف المتشابهة خدعة شائعة.</li>
                      <li><strong>لا تضغط على الروابط في الرسائل التحذيرية:</strong> إذا وصلك إيميل من البنك، افتح تطبيق البنك أو اكتب الموقع بنفسك في المتصفح ولا تستخدم الرابط المرفق.</li>
                      <li><strong>ابحث عن الأخطاء الإملائية:</strong> رسائل التصيد غالباً ما تحتوي على أخطاء لغوية أو صياغة ركيكة.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'hack-social' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-900 mb-4">الهندسة الاجتماعية</h4>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <p className="font-bold text-red-600 mb-2">تكتيك الخداع:</p>
                    <p className="text-sm mb-4">استغلال المشاعر البشرية (الخوف، التعاطف، الطمع، الفضول). المخترق يتصل بك مدعياً أنه من خدمة العملاء، أو يرسل رسالة من حساب صديق مخترق يطلب مساعدة مالية عاجلة، أو يطلب كود وصلك بالخطأ.</p>
                    
                    <p className="font-bold text-green-600 mb-2">كيف تكتشفه وتدافع عنه؟</p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>قاعدة الـ 10 ثواني:</strong> توقف وفكر قبل الاستجابة لأي طلب عاجل. المخترق يعتمد على تسرعك.</li>
                      <li><strong>التحقق المستقل:</strong> إذا طلب منك صديق أموالاً عبر رسالة، اتصل به هاتفياً للتأكد.</li>
                      <li><strong>لا تشارك الأكواد أبداً:</strong> أي كود يصلك في رسالة (OTP) هو لك وحدك. الشركات الحقيقية لا تطلب منك هذا الكود أبداً.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'hack-links' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-900 mb-4">الروابط المزيفة والملغمة</h4>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <p className="font-bold text-red-600 mb-2">تكتيك الخداع:</p>
                    <p className="text-sm mb-4">إخفاء الروابط الخبيثة باستخدام خدمات تقصير الروابط (مثل bit.ly)، أو إرسال روابط لصور وفيديوهات مثيرة للفضول. الضغط عليها قد يؤدي لتحميل برمجيات خبيثة بصمت أو توجيهك لصفحات تصيد.</p>
                    
                    <p className="font-bold text-green-600 mb-2">كيف تكتشفه وتدافع عنه؟</p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>معاينة الرابط:</strong> على الكمبيوتر، مرر الماوس فوق الرابط دون الضغط عليه لرؤية الوجهة الحقيقية في أسفل المتصفح.</li>
                      <li><strong>استخدم فاحص الروابط:</strong> مواقع مثل <span dir="ltr" className="font-mono bg-white px-1">virustotal.com</span> تتيح لك فحص الروابط قبل فتحها.</li>
                      <li><strong>احذر العناوين المثيرة:</strong> "شاهد فضيحة..." أو "اربح آيفون مجاناً" هي طعوم كلاسيكية لاصطياد الضحايا.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'hack-apps' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-900 mb-4">التطبيقات الخبيثة</h4>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <p className="font-bold text-red-600 mb-2">تكتيك الخداع:</p>
                    <p className="text-sm mb-4">تطبيقات تبدو بريئة (تعديل صور، كشاف، ألعاب) لكنها تطلب صلاحيات لا تحتاجها (مثل قراءة الرسائل، الوصول للكاميرا). بمجرد تثبيتها، تقوم بسرقة بياناتك أو إظهار إعلانات مزعجة أو حتى تشفير ملفاتك (Ransomware).</p>
                    
                    <p className="font-bold text-green-600 mb-2">كيف تكتشفه وتدافع عنه؟</p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>المصادر الرسمية فقط:</strong> حمل التطبيقات من Google Play أو App Store فقط، وتجنب ملفات الـ APK من مواقع مجهولة.</li>
                      <li><strong>راجع الصلاحيات (Permissions):</strong> لماذا يحتاج تطبيق "آلة حاسبة" للوصول إلى جهات اتصالك وموقعك الجغرافي؟ ارفض الصلاحيات غير المنطقية.</li>
                      <li><strong>اقرأ التقييمات:</strong> ابحث عن التقييمات السلبية (نجمة واحدة) لترى إن كان المستخدمون يشتكون من سلوك مريب للتطبيق.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'hack-brute' && (
                <div className="space-y-4 text-slate-700">
                  <h4 className="font-bold text-xl text-blue-900 mb-4">تخمين كلمات السر (Brute Force)</h4>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <p className="font-bold text-red-600 mb-2">تكتيك الخداع:</p>
                    <p className="text-sm mb-4">لا يعتمد المخترق هنا على خداعك، بل يستخدم برامج آلية لتجربة ملايين الاحتمالات لكلمات السر في ثوانٍ. يعتمدون على قوائم كلمات السر المسربة سابقاً (Dictionary Attacks) أو تجربة كل الحروف الممكنة.</p>
                    
                    <p className="font-bold text-green-600 mb-2">كيف تكتشفه وتدافع عنه؟</p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>الطول أهم من التعقيد:</strong> كلمة سر من 15 حرفاً عادياً أصعب في التخمين من كلمة سر من 8 حروف معقدة جداً. استخدم "جملة مرور" (Passphrase) مثل: <span dir="ltr" className="font-mono bg-white px-1">MyCatLovesBlueCoffee!</span></li>
                      <li><strong>لا تعيد استخدام كلمات السر:</strong> إذا تم اختراق موقع ضعيف تستخدم فيه كلمة سر معينة، سيجربها المخترق على إيميلك وحساباتك البنكية.</li>
                      <li><strong>تفعيل القفل التلقائي:</strong> تأكد من أن حساباتك تقفل مؤقتاً بعد عدة محاولات دخول فاشلة.</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}

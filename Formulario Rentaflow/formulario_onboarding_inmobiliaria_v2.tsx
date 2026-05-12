import { useState } from 'react';

const focusStyle = `
  input:focus, select:focus, textarea:focus {
    outline: none !important;
    border-color: #0a0a0a !important;
    box-shadow: 0 0 0 1px #0a0a0a !important;
  }
`;

export default function OnboardingForm() {
  const [immediateStart, setImmediateStart] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [userCount, setUserCount] = useState(2);
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [primaryColor, setPrimaryColor] = useState('#7F77DD');
  const [secondaryColor, setSecondaryColor] = useState('#1D9E75');
  const [showModal, setShowModal] = useState(false);

  // Datos de la agencia
  const [agencyName, setAgencyName] = useState('');
  const [commercialName, setCommercialName] = useState('');
  const [cifNif, setCifNif] = useState('');
  const [socialReason, setSocialReason] = useState('');
  const [fiscalAddress, setFiscalAddress] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [country, setCountry] = useState('España');

  // Persona de contacto
  const [contactName, setContactName] = useState('');
  const [contactPosition, setContactPosition] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const isFormValid = agencyName && commercialName && cifNif && socialReason && fiscalAddress && billingEmail && contactName && contactPosition && contactEmail && contactPhone;

  const planUsers = { mini: 1, starter: 2, agency: 6, corporate: 10 };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setUserCount(planUsers[plan] || userCount);
  };

  const plans = [
    {
      id: 'mini',
      name: 'Mini',
      price: '49 €/mes',
      badge: 'Mini',
      badgeColor: 'bg-gray-100 text-gray-700',
      features: ['1 usuario', '100 leads/mes', '3 anuncios simultáneos', 'Respuestas automáticas', '🎁 Regalo Early Adopter', '🎁 50 WhatsApp/mes']
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '99 €/mes',
      badge: 'Recomendado',
      badgeColor: 'bg-green-100 text-green-700',
      features: ['2 usuarios', '400 leads/mes', '6 anuncios simultáneos', 'Automatización completa', 'Calendario inteligente', 'WhatsApp integrado', 'Soporte prioritario', '🎁 Regalo Early Adopter', '🎁 400 WhatsApp/mes']
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '249 €/mes',
      badge: 'Agency',
      badgeColor: 'bg-amber-100 text-amber-700',
      features: ['6 usuarios', '850 leads/mes', '10 anuncios', 'Roles y permisos', 'Multi-agencia', 'Facturación a medida', 'WhatsApp integrado', 'Métricas avanzadas', '🎁 Regalo Early Adopter', '🎁 850 WhatsApp/mes']
    },
    {
      id: 'corporate',
      name: 'Corporate',
      price: 'Precio a medida',
      badge: 'Corporate',
      badgeColor: 'bg-purple-100 text-purple-700',
      features: ['Usuarios ilimitados', 'Leads ilimitados', 'Anuncios ilimitados', 'Todo en Agency', 'WhatsApp personalizado', 'Soporte 24/7']
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 space-y-4">
      <style>{focusStyle}</style>
      <h1 className="sr-only">Formulario de onboarding para nuevas agencias inmobiliarias</h1>

      {/* Bienvenida */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">¡Bienvenido a RentaFlow!</h2>
        <p className="text-gray-600 text-sm mb-1">Estamos encantados de que hayas elegido RentaFlow para gestionar tu agencia inmobiliaria</p>
        <p className="text-gray-500 text-xs">Completa los siguientes datos para configurar tu cuenta</p>
      </div>

      {/* Datos de la agencia */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Datos de la agencia *</h2>
        <div className="space-y-3">
          <input type="text" placeholder="Nombre de la agencia" value={agencyName} onChange={(e) => setAgencyName(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="Nombre comercial (para comunicaciones)" value={commercialName} onChange={(e) => setCommercialName(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="CIF / NIF" value={cifNif} onChange={(e) => setCifNif(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="Razón social" value={socialReason} onChange={(e) => setSocialReason(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
          <input type="text" placeholder="Dirección fiscal" value={fiscalAddress} onChange={(e) => setFiscalAddress(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          <div className="grid grid-cols-2 gap-3">
            <input type="email" placeholder="Email de facturación" value={billingEmail} onChange={(e) => setBillingEmail(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 text-black" style={{ colorScheme: 'light' }}>
              <option style={{ color: 'black' }}>España</option>
              <option style={{ color: 'black' }}>Portugal</option>
              <option style={{ color: 'black' }}>México</option>
              <option style={{ color: 'black' }}>Argentina</option>
            </select>
          </div>
        </div>
      </div>

      {/* Persona de contacto */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Persona de contacto principal *</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Nombre y apellidos" value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="Cargo" value={contactPosition} onChange={(e) => setContactPosition(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input type="email" placeholder="Email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input type="tel" placeholder="+34 600 000 000" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
        </div>
      </div>

      {/* Identidad visual */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Identidad visual</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-xs text-gray-600 font-semibold block mb-2">Color principal</label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-9 h-9 border border-gray-200 rounded-md cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="text-xs font-mono bg-white border border-gray-200 px-2 py-1 rounded-md flex-1"
                placeholder="#000000"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-600 font-semibold block mb-2">Color secundario</label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-9 h-9 border border-gray-200 rounded-md cursor-pointer"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="text-xs font-mono bg-white border border-gray-200 px-2 py-1 rounded-md flex-1"
                placeholder="#000000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Plan y usuarios */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Plan y configuración</h2>
        <label className="text-xs text-gray-600 font-semibold block mb-3">Plan</label>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {plans.map(plan => (
            <button
              key={plan.id}
              onClick={() => handlePlanChange(plan.id)}
              className={`text-left p-3 rounded-md border-2 transition-colors flex flex-col ${selectedPlan === plan.id ? 'border-black bg-white' : 'border-gray-200 bg-gray-50'}`}
            >
              <div className="h-6 mb-2">
                {plan.id === 'starter' && <span className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${plan.badgeColor}`}>{plan.badge}</span>}
              </div>
              <div className="min-h-12">
                <p className="font-semibold text-sm text-gray-900 mb-2">{plan.name}</p>
                <p className="text-xs text-gray-600">{plan.price}</p>
              </div>
              <ul className="text-xs text-gray-600 space-y-0.5 border-t border-gray-200 pt-2 mt-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className={feature.includes('🎁') ? 'text-purple-600' : ''}>{feature}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        <div>
          <label className="text-xs text-gray-600 font-semibold block mb-2">Nº de usuarios iniciales</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setUserCount(Math.max(1, userCount - 1))} className="w-8 h-8 border border-gray-200 rounded-md bg-gray-50 text-lg">−</button>
            <span className="text-base font-semibold w-8 text-center">{userCount}</span>
            <button onClick={() => setUserCount(Math.min(500, userCount + 1))} className="w-8 h-8 border border-gray-200 rounded-md bg-gray-50 text-lg">+</button>
            <span className="text-xs text-gray-600">usuarios</span>
          </div>
        </div>
      </div>

      {/* Fecha de inicio */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Fecha de inicio deseada</h2>
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs text-gray-700 font-semibold">Inicio inmediato</label>
          <button
            onClick={() => setImmediateStart(!immediateStart)}
            className={`relative w-10 h-6 rounded-full transition-colors ${immediateStart ? 'bg-black' : 'bg-gray-300'}`}
            style={immediateStart ? { backgroundColor: '#0a0a0a' } : {}}
          >
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${immediateStart ? 'translate-x-4' : ''}`}></div>
          </button>
        </div>
        {!immediateStart && (
          <div className="mb-4">
            <label className="text-xs text-gray-600 font-semibold block mb-2">Fecha de activación</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
        )}
        <div>
          <label className="text-xs text-gray-600 font-semibold block mb-2">Notas adicionales</label>
          <textarea placeholder="Cualquier detalle relevante para el onboarding..." className="w-full h-16 px-3 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 resize-none"></textarea>
        </div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        disabled={!isFormValid}
        className="w-full h-10 text-white font-semibold rounded-md transition-colors"
        style={{
          backgroundColor: isFormValid ? '#0a0a0a' : '#999999',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          opacity: isFormValid ? 1 : 0.6
        }}
        onMouseEnter={(e) => {
          if (isFormValid) e.target.style.backgroundColor = '#1a1a1a';
        }}
        onMouseLeave={(e) => {
          if (isFormValid) e.target.style.backgroundColor = '#0a0a0a';
        }}
      >
        Crear cuenta →
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">¡Datos recibidos!</h2>
            <p className="text-sm text-gray-600 mb-6">Hemos recibido tu información correctamente. Nos pondremos en contacto pronto para configurar tu cuenta.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full h-10 text-white font-semibold rounded-md transition-colors"
              style={{ backgroundColor: '#0a0a0a' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0a0a0a'}
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Despedida */}
      <div className="text-center pt-4">
        <p className="text-xs text-gray-600 mb-1">¿Tienes alguna pregunta? Nuestro equipo está disponible para ayudarte</p>
        <p className="text-xs text-gray-500">Una vez que crees tu cuenta, recibirás un email de confirmación con los próximos pasos</p>
      </div>
    </div>
  );
}
export default function SatishLinkPage() { const links = [ { title: '🎥 Watch Latest Video', url: 'https://www.youtube.com/@proud-bharat', }, { title: '▶️ YouTube Channel', url: 'https://www.youtube.com/@proud-bharat', }, { title: '📸 Instagram', url: 'https://www.instagram.com/iam_prajapati7?igsh=MWE1bmEwNHFremJxZQ==', }, { title: '📘 Facebook', url: 'https://www.facebook.com/share/1G27g8ojVb/', }, ];

const featured = [ { title: '🔥 Motivation Content', desc: 'Daily mindset and discipline content.', }, { title: '🎥 Proud Bharat YouTube', desc: 'Reality talks and self growth videos.', }, { title: '📱 Follow on Instagram', desc: 'Short reels and motivation clips.', }, ];

return ( <div className="min-h-screen bg-black text-white flex items-center justify-center p-6"> <div className="w-full max-w-md"> <div className="bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden"> {/* Header */} <div className="p-8 text-center"> <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-red-600 shadow-2xl"> <img
src="/mnt/data/36696.webp"
alt="Satish Kumar"
className="w-full h-full object-cover"
/> </div>

<h1 className="text-3xl font-bold mt-5 tracking-wide">
          SATISH KUMAR
        </h1>

        <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
          Motivation • Self Growth • Reality Talks
        </p>

        <div className="mt-5 text-sm text-zinc-300 italic">
          “Helping people become mentally stronger.”
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-4 space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block w-full bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-2xl py-4 text-center font-semibold shadow-lg hover:scale-[1.02]"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="px-6 py-4">
        <div className="border-t border-zinc-700"></div>
      </div>

      {/* Featured */}
      <div className="px-6 pb-8">
        <h2 className="text-xl font-bold mb-4 text-center">
          Featured Content
        </h2>

        <div className="space-y-4">
          {featured.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700 hover:border-red-500 transition-all"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-zinc-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-950 text-center py-5 text-sm text-zinc-500 border-t border-zinc-800">
        Follow for daily mindset improvement.
      </div>
    </div>
  </div>
</div>

); }

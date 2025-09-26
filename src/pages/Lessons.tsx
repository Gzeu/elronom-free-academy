import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Lesson = { id: string; title: string; slug: string; excerpt: string; module_id: string; };

export default function Lessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("lessons").select("id,title,slug,excerpt,module_id").limit(50);
      if (!error && data) setLessons(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-4">Lessons</h1>
      {loading ? <p className="text-gray-400">Loading…</p> : (
        <div className="grid md:grid-cols-2 gap-4">
          {lessons.map(l => (
            <article key={l.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h3 className="font-semibold">{l.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{l.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
'use client';

import Link from 'next/link';
import {
  verificationConversations,
  getConversationsByLevel,
} from '@/content/verification-conversations';
import { learningPath } from '@/content/learning-path';

export default function ConversationsPage() {
  return (
    <div className='mx-auto max-w-lg px-4 py-6'>
      {/* Header */}
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold font-bangla mb-1'>কথোপকথন অনুশীলন</h1>
        <p className='text-sm text-muted'>Conversation Practice</p>
        <p className='text-xs text-muted font-bangla mt-1'>
          আসল পরিস্থিতিতে ইংরেজি বলার অনুশীলন করো
        </p>
      </div>

      {/* Conversations grouped by level */}
      <div className='space-y-6'>
        {learningPath.map((level) => {
          const conversations = getConversationsByLevel(level.id);
          if (conversations.length === 0) return null;

          return (
            <div key={level.id}>
              {/* Level header */}
              <div className='flex items-center gap-2 mb-3'>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${level.color} text-white`}
                >
                  L{level.id}
                </span>
                <h2 className='font-bold font-bangla text-sm'>
                  {level.icon} {level.name_bn}
                </h2>
                <span className='text-xs text-muted'>{level.name_en}</span>
              </div>

              {/* Conversation cards */}
              <div className='space-y-2'>
                {conversations.map((conv) => (
                  <Link
                    key={conv.id}
                    href={`/conversations/${conv.id}`}
                    className='block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all'
                  >
                    <div className='flex items-start gap-3'>
                      <span className='text-2xl shrink-0'>{conv.icon}</span>
                      <div className='flex-1 min-w-0'>
                        <p className='font-bold font-bangla text-sm'>
                          {conv.title_bn}
                        </p>
                        <p className='text-xs text-muted'>{conv.title_en}</p>
                        <p className='text-xs text-muted font-bangla mt-1 line-clamp-2'>
                          {conv.situation_bn}
                        </p>
                        <div className='flex items-center gap-2 mt-2'>
                          <span className='text-[10px] text-muted'>
                            {conv.turns.length} turns
                          </span>
                          <span className='text-[10px] text-muted'>
                            {conv.patternsUsed.length} patterns
                          </span>
                        </div>
                      </div>
                      <span className='text-muted shrink-0'>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className='mt-6 p-3 rounded-lg bg-card border border-card-border text-center'>
        <p className='text-xs text-muted font-bangla'>
          মোট {verificationConversations.length}টি কথোপকথন • ৬টি লেভেল
        </p>
      </div>
    </div>
  );
}

insert into modules (title, slug, description, position) values
('Introduction to MultiversX', 'intro', 'Basics of wallets, addresses and transactions', 1),
('Building on Testnet', 'testnet', 'Hands-on practice with safe testnet flows', 2),
('Trading Fundamentals', 'trading', 'Learn technical analysis and trading strategies', 3),
('Smart Contracts', 'contracts', 'Understand and interact with smart contracts', 4),
('DeFi Protocols', 'defi', 'Explore decentralized finance on MultiversX', 5),
('Advanced Topics', 'advanced', 'Deep dive into complex blockchain concepts', 6)
on conflict do nothing;

insert into lessons (module_id, title, slug, excerpt, position)
select m.id, 'What is MultiversX?', 'what-is-mx', 'Core concepts and ecosystem overview', 1
from modules m where m.slug = 'intro'
on conflict do nothing;

insert into lessons (module_id, title, slug, excerpt, position)
select m.id, 'Setting up xPortal', 'setup-xportal', 'Install and secure your wallet', 2
from modules m where m.slug = 'intro'
on conflict do nothing;

insert into lessons (module_id, title, slug, excerpt, position)
select m.id, 'Your First Transaction', 'first-transaction', 'Send testnet EGLD safely', 3
from modules m where m.slug = 'intro'
on conflict do nothing;

insert into lessons (module_id, title, slug, excerpt, position)
select m.id, 'Understanding Addresses', 'addresses', 'How blockchain addresses work', 4
from modules m where m.slug = 'intro'
on conflict do nothing;

insert into lessons (module_id, title, slug, excerpt, position)
select m.id, 'Security Best Practices', 'security', 'Keep your crypto safe', 5
from modules m where m.slug = 'intro'
on conflict do nothing;
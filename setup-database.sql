-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  college TEXT NOT NULL,
  date DATE NOT NULL,
  venue TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  event_type TEXT NOT NULL,
  website TEXT,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read events
CREATE POLICY "Allow anyone to read events" ON events
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert events
CREATE POLICY "Allow authenticated users to insert events" ON events
  FOR INSERT WITH CHECK (true);

-- Insert sample data
INSERT INTO events (name, college, date, venue, description, image_url, event_type, website, contact_email, contact_phone, is_featured)
VALUES
  (
    'Techfest 2023',
    'IIT Bombay',
    '2023-12-15',
    'IIT Bombay Campus, Powai',
    'Asia''s largest science and technology festival. Join us for competitions, exhibitions, lectures, and workshops covering various aspects of science and technology.',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=500',
    'Technical',
    'https://techfest.org',
    'info@techfest.org',
    '+91 9876543210',
    true
  ),
  (
    'Mood Indigo 2023',
    'IIT Bombay',
    '2023-12-22',
    'IIT Bombay Campus, Powai',
    'Asia''s largest college cultural festival. Experience music, dance, arts, and more in this 4-day extravaganza that celebrates creativity and talent.',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&h=500',
    'Cultural',
    'https://moodi.org',
    'info@moodi.org',
    '+91 9876543211',
    true
  ),
  (
    'Malhar 2023',
    'St. Xavier''s College',
    '2023-08-18',
    'St. Xavier''s College, Fort',
    'One of Mumbai''s most anticipated college festivals. Malhar features competitions in literary arts, performing arts, and fine arts, along with workshops and star performances.',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&h=500',
    'Cultural',
    'https://malharfest.org',
    'info@malharfest.org',
    '+91 9876543212',
    true
  ),
  (
    'Umang 2023',
    'NM College',
    '2023-09-10',
    'NM College Campus, Vile Parle',
    'A vibrant celebration of talent and creativity. Umang features competitions, workshops, and performances across various cultural and artistic domains.',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&h=500',
    'Cultural',
    'https://umangfest.org',
    'info@umangfest.org',
    '+91 9876543213',
    true
  ),
  (
    'Kshitij 2023',
    'Mithibai College',
    '2023-10-05',
    'Mithibai College, Vile Parle',
    'A platform for students to showcase their talents in various cultural and technical events. Kshitij features competitions, workshops, and star performances.',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&h=500',
    'Cultural',
    'https://kshitijfest.org',
    'info@kshitijfest.org',
    '+91 9876543214',
    true
  ),
  (
    'Enthusia 2023',
    'VJTI',
    '2023-11-12',
    'VJTI Campus, Matunga',
    'Mumbai''s premier sports festival. Enthusia features competitions in various sports like cricket, football, basketball, and athletics, along with workshops and exhibitions.',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&h=500',
    'Sports',
    'https://enthusiafest.org',
    'info@enthusiafest.org',
    '+91 9876543215',
    true
  );


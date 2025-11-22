/**
 * Admin Panel Component
 * Frontend-only admin interface for managing images and testimonials
 * Uses localStorage for authentication and image storage
 */

import { useState, useEffect } from 'react';
import { Lock, Upload, X, Trash2, Save, LogOut, Image as ImageIcon, Star } from 'lucide-react';

function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'testimonials'
  
  // Gallery state
  const [galleryImages, setGalleryImages] = useState([]);
  const [newImageTitle, setNewImageTitle] = useState('');
  const [selectedGalleryFile, setSelectedGalleryFile] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState('');
  
  // Testimonials state
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    author: '',
    quote: '',
    rating: 5,
    image: ''
  });

  // Default credentials (stored in localStorage on first run)
  const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'gripzzy2024'
  };

  useEffect(() => {
    // Initialize default credentials if not set
    if (!localStorage.getItem('adminCredentials')) {
      localStorage.setItem('adminCredentials', JSON.stringify(DEFAULT_CREDENTIALS));
    }
    
    // Check if already logged in
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    // Load gallery images
    const savedGallery = localStorage.getItem('galleryImages');
    if (savedGallery) {
      setGalleryImages(JSON.parse(savedGallery));
    }
    
    // Load testimonials
    const savedTestimonials = localStorage.getItem('customTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedCreds = JSON.parse(localStorage.getItem('adminCredentials'));
    
    if (username === storedCreds.username && password === storedCreds.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      loadData();
    } else {
      alert('❌ Invalid credentials! Default: admin / gripzzy2024');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
    setUsername('');
    setPassword('');
  };

  const handleImageSelect = (e, type = 'gallery') => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('❌ File size too large! Maximum 2MB allowed.');
      e.target.value = '';
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('❌ Please upload an image file!');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      
      if (type === 'gallery') {
        setSelectedGalleryFile(file);
        setGalleryPreview(base64String);
      } else if (type === 'testimonial') {
        setNewTestimonial(prev => ({ ...prev, image: base64String }));
      }
    };
    
    reader.readAsDataURL(file);
  };

  const handleGalleryUpload = (e) => {
    e.preventDefault();

    // Validate image title
    if (!newImageTitle.trim()) {
      alert('❌ Please enter an image title!');
      return;
    }

    // Validate image selection
    if (!selectedGalleryFile || !galleryPreview) {
      alert('❌ Please select an image to upload!');
      return;
    }

    const newImage = {
      id: Date.now(),
      src: galleryPreview,
      title: newImageTitle.trim(),
      alt: newImageTitle.trim(),
      uploadedAt: new Date().toISOString()
    };
    
    const updatedGallery = [...galleryImages, newImage];
    setGalleryImages(updatedGallery);
    localStorage.setItem('galleryImages', JSON.stringify(updatedGallery));
    
    // Reset form
    setNewImageTitle('');
    setSelectedGalleryFile(null);
    setGalleryPreview('');
    
    // Clear file input
    const fileInput = document.querySelector('input[type="file"][accept="image/*"]');
    if (fileInput) fileInput.value = '';
    
    alert('✅ Gallery image uploaded successfully!');
  };

  const deleteGalleryImage = (id) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    
    const updatedGallery = galleryImages.filter(img => img.id !== id);
    setGalleryImages(updatedGallery);
    localStorage.setItem('galleryImages', JSON.stringify(updatedGallery));
    alert('✅ Image deleted successfully!');
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    
    if (!newTestimonial.author || !newTestimonial.quote) {
      alert('❌ Please fill in author name and quote!');
      return;
    }

    const testimonial = {
      id: Date.now(),
      ...newTestimonial,
      uploadedAt: new Date().toISOString()
    };

    const updatedTestimonials = [...testimonials, testimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('customTestimonials', JSON.stringify(updatedTestimonials));
    
    // Reset form
    setNewTestimonial({
      author: '',
      quote: '',
      rating: 5,
      image: ''
    });
    
    alert('✅ Testimonial added successfully!');
  };

  const deleteTestimonial = (id) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    
    const updatedTestimonials = testimonials.filter(t => t.id !== id);
    setTestimonials(updatedTestimonials);
    localStorage.setItem('customTestimonials', JSON.stringify(updatedTestimonials));
    alert('✅ Testimonial deleted successfully!');
  };

  const changePassword = () => {
    const newPassword = prompt('Enter new password:');
    if (!newPassword || newPassword.length < 6) {
      alert('❌ Password must be at least 6 characters!');
      return;
    }
    
    const storedCreds = JSON.parse(localStorage.getItem('adminCredentials'));
    storedCreds.password = newPassword;
    localStorage.setItem('adminCredentials', JSON.stringify(storedCreds));
    alert('✅ Password changed successfully!');
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border-4 border-white/50">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-full mb-4">
              <Lock size={48} className="text-white" />
            </div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-gray-600 mt-2">Homestay Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              🔓 Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Default: admin / gripzzy2024
          </p>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-between items-center border-2 border-teal-100">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              ⚙️ Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">Manage your homestay content</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={changePassword}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
            >
              🔑 Change Password
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🖼️ Gallery Images ({galleryImages.length})
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${
              activeTab === 'testimonials'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            ⭐ Testimonials ({testimonials.length})
          </button>
        </div>
      </div>

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <div className="max-w-7xl mx-auto">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-2 border-teal-100">
            <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
              <Upload size={24} />
              Upload New Gallery Image
            </h2>
            
            <form onSubmit={handleGalleryUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newImageTitle}
                  onChange={(e) => setNewImageTitle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500"
                  placeholder="e.g., Bedroom View, Living Room, Garden"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Image (Max 2MB) <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageSelect(e, 'gallery')}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-100 file:text-teal-700 file:font-semibold hover:file:bg-teal-200"
                  required
                />
              </div>

              {/* Image Preview */}
              {galleryPreview && (
                <div className="border-2 border-teal-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Preview:</p>
                  <img 
                    src={galleryPreview} 
                    alt="Preview" 
                    className="w-full max-w-md h-64 object-cover rounded-lg mx-auto"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {selectedGalleryFile?.name} ({(selectedGalleryFile?.size / 1024).toFixed(2)} KB)
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload size={20} />
                Upload Image
              </button>
            </form>
          </div>

          {/* Gallery Grid */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-100">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Current Gallery Images
            </h2>
            
            {galleryImages.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <ImageIcon size={64} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No images uploaded yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-lg border-2 border-teal-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => deleteGalleryImage(img.id)}
                        className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="p-3 bg-white">
                      <p className="font-semibold text-gray-800">{img.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(img.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Testimonials Tab */}
      {activeTab === 'testimonials' && (
        <div className="max-w-7xl mx-auto">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-2 border-teal-100">
            <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
              <Star size={24} />
              Add New Testimonial
            </h2>
            
            <form onSubmit={handleAddTestimonial} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Guest Name
                </label>
                <input
                  type="text"
                  value={newTestimonial.author}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500"
                  placeholder="e.g., John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Review Quote
                </label>
                <textarea
                  value={newTestimonial.quote}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, quote: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500"
                  placeholder="Guest's review..."
                  rows="4"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rating (1-5 stars)
                </label>
                <select
                  value={newTestimonial.rating}
                  onChange={(e) => setNewTestimonial(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500"
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                  <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                  <option value="3">⭐⭐⭐ (3 stars)</option>
                  <option value="2">⭐⭐ (2 stars)</option>
                  <option value="1">⭐ (1 star)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Review Screenshot (Optional, Max 2MB)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageSelect(e, 'testimonial')}
                  className="w-full px-4 py-3 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-100 file:text-teal-700 file:font-semibold hover:file:bg-teal-200"
                />
                {newTestimonial.image && (
                  <div className="mt-3 border-2 border-teal-200 rounded-lg p-2">
                    <p className="text-xs text-gray-600 mb-2">Preview:</p>
                    <img src={newTestimonial.image} alt="Preview" className="w-full max-w-xs h-48 object-cover rounded-lg mx-auto" />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Add Testimonial
              </button>
            </form>
          </div>

          {/* Testimonials List */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-100">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Current Testimonials
            </h2>
            
            {testimonials.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Star size={64} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No testimonials added yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border-2 border-teal-100 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold text-lg text-gray-800">{testimonial.author}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-amber-500" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteTestimonial(testimonial.id)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                    
                    {testimonial.image && (
                      <img src={testimonial.image} alt="Review" className="w-full max-w-md h-auto rounded-lg border-2 border-teal-100" />
                    )}
                    
                    <p className="text-xs text-gray-500 mt-2">
                      Added: {new Date(testimonial.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;

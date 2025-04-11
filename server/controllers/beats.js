// @desc    Get all beats
// @route   GET /api/beats
// @access  Public
exports.getAllBeats = async (req, res) => {
  try {
    const beats = await req.prisma.beat.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true
          }
        }
      }
    });

    res.json({
      success: true,
      count: beats.length,
      beats
    });
  } catch (error) {
    console.error('Get all beats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching beats'
    });
  }
};

// @desc    Get beat by ID
// @route   GET /api/beats/:id
// @access  Public
exports.getBeatById = async (req, res) => {
  try {
    const beat = await req.prisma.beat.findUnique({
      where: { id: req.params.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true
          }
        }
      }
    });

    if (!beat) {
      return res.status(404).json({ 
        success: false,
        message: 'Beat not found' 
      });
    }

    res.json({
      success: true,
      beat
    });
  } catch (error) {
    console.error('Get beat by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching beat'
    });
  }
};

// @desc    Create a new beat
// @route   POST /api/beats
// @access  Private
exports.createBeat = async (req, res) => {
  try {
    const { 
      title, 
      description, 
      price, 
      audioUrl, 
      imageUrl,
      bpm,
      key,
      genre,
      tags,
      licenseType
    } = req.body;

    const beat = await req.prisma.beat.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        audioUrl,
        imageUrl,
        bpm: bpm ? parseInt(bpm) : null,
        key,
        genre,
        tags,
        licenseType: licenseType || 'BASIC',
        userId: req.user.id
      }
    });

    res.status(201).json({
      success: true,
      beat
    });
  } catch (error) {
    console.error('Create beat error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating beat'
    });
  }
};

// @desc    Update a beat
// @route   PUT /api/beats/:id
// @access  Private
exports.updateBeat = async (req, res) => {
  try {
    const beatId = req.params.id;
    
    // Check if beat exists and belongs to user
    const existingBeat = await req.prisma.beat.findUnique({
      where: { id: beatId }
    });

    if (!existingBeat) {
      return res.status(404).json({ 
        success: false,
        message: 'Beat not found' 
      });
    }

    // Check ownership
    if (existingBeat.userId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ 
        success: false,
        message: 'Unauthorized to update this beat' 
      });
    }

    // Update the beat
    const updatedBeat = await req.prisma.beat.update({
      where: { id: beatId },
      data: {
        ...req.body,
        // Handle numeric conversions
        price: req.body.price ? parseFloat(req.body.price) : undefined,
        bpm: req.body.bpm ? parseInt(req.body.bpm) : undefined
      }
    });

    res.json({
      success: true,
      beat: updatedBeat
    });
  } catch (error) {
    console.error('Update beat error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating beat'
    });
  }
};

// @desc    Delete a beat
// @route   DELETE /api/beats/:id
// @access  Private
exports.deleteBeat = async (req, res) => {
  try {
    const beatId = req.params.id;
    
    // Check if beat exists and belongs to user
    const existingBeat = await req.prisma.beat.findUnique({
      where: { id: beatId }
    });

    if (!existingBeat) {
      return res.status(404).json({ 
        success: false,
        message: 'Beat not found' 
      });
    }

    // Check ownership
    if (existingBeat.userId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ 
        success: false,
        message: 'Unauthorized to delete this beat' 
      });
    }

    // Delete the beat
    await req.prisma.beat.delete({
      where: { id: beatId }
    });

    res.json({
      success: true,
      message: 'Beat successfully deleted'
    });
  } catch (error) {
    console.error('Delete beat error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting beat'
    });
  }
};

// @desc    Purchase a beat
// @route   POST /api/beats/:id/purchase
// @access  Private
exports.purchaseBeat = async (req, res) => {
  try {
    const beatId = req.params.id;
    const buyerId = req.user.id;
    
    // Check if beat exists
    const beat = await req.prisma.beat.findUnique({
      where: { id: beatId },
      include: { user: true }
    });

    if (!beat) {
      return res.status(404).json({ 
        success: false,
        message: 'Beat not found' 
      });
    }

    // Can't purchase your own beat
    if (beat.userId === buyerId) {
      return res.status(400).json({ 
        success: false,
        message: 'You cannot purchase your own beat' 
      });
    }

    // Create transaction
    const transaction = await req.prisma.transaction.create({
      data: {
        amount: beat.price,
        status: 'COMPLETED', // In a real app, this would be PENDING until payment is processed
        beatId,
        buyerId,
        sellerId: beat.userId
      }
    });

    res.status(201).json({
      success: true,
      message: 'Beat purchased successfully',
      transaction
    });
  } catch (error) {
    console.error('Purchase beat error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error processing purchase'
    });
  }
}; 
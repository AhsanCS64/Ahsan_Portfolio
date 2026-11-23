export const readingGroups = [
  {
    "id": "foundations",
    "title": "Foundational Learning",
    "intro": "I began with FaceNet’s triplet loss, then studied how the choice of training pairs changes what a model learns. CLIP brought the two sides of my reading together by pairing images with language.",
    "papers": [
      {
        "name": "FaceNet",
        "year": 2015,
        "title": "FaceNet: A Unified Embedding for Face Recognition and Clustering",
        "focus": "Metric learning with triplet loss",
        "url": "https://arxiv.org/abs/1503.03832",
        "status": "read"
      },
      {
        "name": "SimCLR",
        "year": 2020,
        "title": "A Simple Framework for Contrastive Learning of Visual Representations",
        "focus": "Image augmentations and NT-Xent loss",
        "url": "https://arxiv.org/abs/2002.05709",
        "status": "read"
      },
      {
        "name": "SimCSE",
        "year": 2021,
        "title": "SimCSE: Simple Contrastive Learning of Sentence Embeddings",
        "focus": "Sentence embeddings and dropout as augmentation",
        "url": "https://arxiv.org/abs/2104.08821",
        "status": "read"
      },
      {
        "name": "MoCo",
        "year": 2020,
        "title": "Momentum Contrast for Unsupervised Visual Representation Learning",
        "focus": "Momentum encoders and queues of negative examples",
        "url": "https://arxiv.org/abs/1911.05722",
        "status": "read"
      },
      {
        "name": "BYOL",
        "year": 2020,
        "title": "Bootstrap Your Own Latent: A New Approach to Self-Supervised Learning",
        "focus": "Learning from two views without negative pairs",
        "url": "https://arxiv.org/abs/2006.07733",
        "status": "read"
      },
      {
        "name": "SimSiam",
        "year": 2021,
        "title": "Exploring Simple Siamese Representation Learning",
        "focus": "Siamese networks and stop-gradient",
        "url": "https://arxiv.org/abs/2011.10566",
        "status": "read"
      },
      {
        "name": "CLIP",
        "year": 2021,
        "title": "Learning Transferable Visual Models From Natural Language Supervision",
        "focus": "Image–text alignment and zero-shot transfer",
        "url": "https://arxiv.org/abs/2103.00020",
        "status": "read"
      }
    ]
  },
  {
    "id": "medical",
    "title": "Medical Vision-Language Research",
    "intro": "My first implementation was GLoRIA. MedCLIP is next on my list because it asks how images and reports can supervise one another even when they come from different cases.",
    "papers": [
      {
        "name": "GLoRIA",
        "year": 2021,
        "title": "GLoRIA: A Multimodal Global-Local Representation Learning Framework for Label-Efficient Medical Image Recognition",
        "focus": "Global image–report and local region–word alignment",
        "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Huang_GLoRIA_A_Multimodal_Global-Local_Representation_Learning_Framework_for_Label-Efficient_Medical_ICCV_2021_paper.html",
        "status": "implemented"
      },
      {
        "name": "MedCLIP",
        "year": 2022,
        "title": "MedCLIP: Contrastive Learning from Unpaired Medical Images and Text",
        "focus": "Semantic matching of unpaired images and reports",
        "url": "https://arxiv.org/abs/2210.10163",
        "status": "target"
      },
      {
        "name": "BioViL",
        "year": 2022,
        "title": "Making the Most of Text Semantics to Improve Biomedical Vision–Language Processing",
        "focus": "Radiology report semantics and phrase grounding",
        "url": "https://arxiv.org/abs/2204.09817",
        "status": "target"
      },
      {
        "name": "CheXzero",
        "year": 2022,
        "title": "Expert-level Detection of Pathologies from Unannotated Chest X-ray Images via Self-supervised Learning",
        "focus": "Zero-shot classification from radiograph–report pairs",
        "url": "https://doi.org/10.1038/s41551-022-00936-9",
        "status": "target"
      },
      {
        "name": "LoVT",
        "year": 2022,
        "title": "Joint Learning of Localized Representations from Medical Images and Reports",
        "focus": "Local contrastive objectives for regions and report sentences",
        "url": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/html/5595_ECCV_2022_paper.php",
        "status": "target"
      },
      {
        "name": "CXR-CLIP",
        "year": 2023,
        "title": "CXR-CLIP: Toward Large Scale Chest X-ray Language-Image Pre-training",
        "focus": "Combining image–label and image–text datasets",
        "url": "https://arxiv.org/abs/2310.13292",
        "status": "target"
      },
      {
        "name": "KAD",
        "year": 2023,
        "title": "Knowledge-enhanced visual-language pre-training on chest radiology images",
        "focus": "Using medical knowledge to guide vision–language pretraining",
        "url": "https://www.nature.com/articles/s41467-023-40260-7",
        "status": "target"
      }
    ]
  }
];

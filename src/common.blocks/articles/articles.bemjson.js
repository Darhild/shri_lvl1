module.exports.bemjson = {
  block: 'articles',
  mix: [
    { block: 'list', mods: {'view': 'default'}}
  ],
  content: [
    { block: 'articles',
      elem: 'article',
      mix: [
        { block: 'list', elem: 'item', elemMods: {'indent-b': 'xl'}}
      ],
      content: [
        { block: 'articles',
          elem: 'unit',
          mix: [
            { block: 'icon-plus', mods: {'vertical-align': 'center'}}
          ],
          content: [
            { block: 'articles',
              elem: 'pic',
              mix: [
                { block: 'theme', mods: {'color': 'project-inverse'}},
                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
                { block: 'image'}
              ]
            },
            { block: 'articles',
              elem: 'content',
              mix: [
                { block: 'icon-plus', elem: 'block'}
              ],
              content: [
                { block: 'articles',
                  elem: 'data',
                  mix: [
                    {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'title',
                  mix: [
                    {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'l'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'hashtag',
                  mix: [
                    {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { block: 'articles',
      elem: 'article',
      mix: [
        { block: 'list', elem: 'item', elemMods: {'indent-b': 'xl'}}
      ],
      content: [
        { block: 'articles',
          elem: 'unit',
          mix: [
            { block: 'icon-plus', mods: {'vertical-align': 'center'}}
          ],
          content: [
            { block: 'articles',
              elem: 'pic',
              mix: [
                { block: 'theme', mods: {'color': 'project-inverse'}},
                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
                { block: 'image'}
              ]
            },
            { block: 'articles',
              elem: 'content',
              mix: [
                { block: 'icon-plus', elem: 'block'}
              ],
              content: [
                { block: 'articles',
                  elem: 'data',
                  mix: [
                    {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'title',
                  mix: [
                    {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'l'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'hashtag',
                  mix: [
                    {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { block: 'articles',
      elem: 'article',
      mix: [
        { block: 'list', elem: 'item'}
      ],
      content: [
        { block: 'articles',
          elem: 'unit',
          mix: [
            { block: 'icon-plus', mods: {'vertical-align': 'center'}}
          ],
          content: [
            { block: 'articles',
              elem: 'pic',
              mix: [
                { block: 'theme', mods: {'color': 'project-inverse'}},
                { block: 'icon-plus', elem: 'icon', mods: {'indent-r': 'm'}},
                { block: 'image'}
              ]
            },
            { block: 'articles',
              elem: 'content',
              mix: [
                { block: 'icon-plus', elem: 'block'}
              ],
              content: [
                { block: 'articles',
                  elem: 'data',
                  mix: [
                    {block: 'text', mods: {'view': 'secondary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'title',
                  mix: [
                    {block: 'text', mods: {'view': 'primary', 'size': 'l'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'l'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    }
                  ]
                },
                { block: 'articles',
                  elem: 'hashtag',
                  mix: [
                    {block: 'text', mods: {'view': 'link', 'size': 'm'}}
                  ],
                  content: [
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 'm'}
                    },
                    { block: 'text',
                      elem: 'word',
                      elemMods: {'width': 's'}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

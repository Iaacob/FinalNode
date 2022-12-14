USE [finalNode]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 25/10/2022 09:02:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[id] [int] NOT NULL,
	[imagen] [varchar](max) NOT NULL,
	[titulo] [varchar](max) NOT NULL,
	[fecha de creacion] [date] NOT NULL,
	[calificacion] [int] NOT NULL,
	[personajes asociados] [varchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 25/10/2022 09:02:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](max) NOT NULL,
	[nombre] [varchar](max) NOT NULL,
	[edad] [int] NOT NULL,
	[peso] [int] NOT NULL,
	[historia] [varchar](max) NOT NULL,
	[peliculas asociadas] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 
GO
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas asociadas]) VALUES (1, N'https://www.ecured.cu/images/9/9f/Mike-Wazowski.jpg', N'mike', 35, 12, N'hola soy mike', N'monster inc')
GO
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas asociadas]) VALUES (2, N'https://static.wikia.nocookie.net/disney/images/2/27/Russell-up.jpg/revision/latest/top-crop/width/360/height/360?cb=20170712010019&path-prefix=es', N'rusell', 11, 120, N'hola soy rusell', N'up')
GO
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
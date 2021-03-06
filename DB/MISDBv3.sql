USE [master]
GO
/****** Object:  Database [MIS]    Script Date: 08/01/2022 11:54:01 AM ******/
CREATE DATABASE [MIS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MIS', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MIS.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MIS_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MIS_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MIS] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MIS].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MIS] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MIS] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MIS] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MIS] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MIS] SET ARITHABORT OFF 
GO
ALTER DATABASE [MIS] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MIS] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MIS] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MIS] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MIS] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MIS] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MIS] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MIS] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MIS] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MIS] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MIS] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MIS] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MIS] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MIS] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MIS] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MIS] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MIS] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MIS] SET RECOVERY FULL 
GO
ALTER DATABASE [MIS] SET  MULTI_USER 
GO
ALTER DATABASE [MIS] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MIS] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MIS] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MIS] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MIS] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'MIS', N'ON'
GO
ALTER DATABASE [MIS] SET QUERY_STORE = OFF
GO
USE [MIS]
GO
/****** Object:  Table [dbo].[ChiTietHoaDon]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChiTietHoaDon](
	[maHD] [varchar](10) NOT NULL,
	[maSP] [varchar](10) NOT NULL,
	[soLuong] [int] NULL,
 CONSTRAINT [PK_ChiTietHoaDon] PRIMARY KEY CLUSTERED 
(
	[maSP] ASC,
	[maHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CuaHang]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CuaHang](
	[accountID] [varchar](10) NOT NULL,
	[tenCH] [nvarchar](50) NULL,
	[CMND] [varchar](20) NULL,
	[ngayThamGia] [date] NULL,
	[SDT] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[diaChi] [nvarchar](100) NULL,
	[maPhuongXa] [varchar](10) NULL,
	[maGPKD] [varchar](50) NULL,
	[maCNATTP] [varchar](50) NULL,
 CONSTRAINT [PK_CuaHang] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DiaChiKhachHang]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DiaChiKhachHang](
	[maDC] [varchar](10) NULL,
	[accountID] [varchar](10) NULL,
	[diaChi] [nvarchar](200) NULL,
	[isDefault] [bit] NULL,
	[maPhuongXa] [varchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[accountID] [varchar](10) NOT NULL,
	[maSP] [varchar](10) NOT NULL,
	[soLuong] [int] NULL,
 CONSTRAINT [PK_GioHang] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC,
	[maSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HinhThucThanhToan]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HinhThucThanhToan](
	[maTT] [varchar](10) NOT NULL,
	[tenTT] [varchar](20) NULL,
	[moTaTT] [nvarchar](500) NULL,
 CONSTRAINT [PK_HinhThucThanhToan] PRIMARY KEY CLUSTERED 
(
	[maTT] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HoaDon]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoaDon](
	[maHD] [varchar](10) NOT NULL,
	[ngayLap] [date] NULL,
	[phiShip] [int] NULL,
	[tongTien] [int] NULL,
	[maDCKH] [varchar](10) NULL,
	[account_S] [varchar](10) NULL,
	[account_CH] [varchar](10) NULL,
	[account_KH] [varchar](10) NULL,
	[hinhThucTT] [varchar](10) NULL,
 CONSTRAINT [PK_HoaDon] PRIMARY KEY CLUSTERED 
(
	[maHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KhachHang]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KhachHang](
	[accountID] [varchar](10) NULL,
	[hoTen] [nvarchar](100) NULL,
	[CMND] [varchar](20) NULL,
	[ngaySinh] [date] NULL,
	[gioiTinh] [nvarchar](50) NULL,
	[SDT] [varchar](20) NULL,
	[email] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LichSuGiaoHang]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LichSuGiaoHang](
	[maHD] [varchar](10) NOT NULL,
	[thoiGian] [datetime] NOT NULL,
	[statusCode] [varchar](10) NULL,
	[ghiChu] [varchar](200) NULL,
 CONSTRAINT [PK_LichSuGiaoHang] PRIMARY KEY CLUSTERED 
(
	[maHD] ASC,
	[thoiGian] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiSanPham]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoaiSanPham](
	[maLoaiSP] [varchar](10) NOT NULL,
	[tenLoaiSP] [nvarchar](50) NULL,
	[maNhomSP] [varchar](10) NULL,
 CONSTRAINT [PK_LoaiSanPham] PRIMARY KEY CLUSTERED 
(
	[maLoaiSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhanVien]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhanVien](
	[accountID] [varchar](10) NOT NULL,
	[hoTen] [nvarchar](50) NULL,
	[CMND] [varchar](20) NULL,
	[ngaySinh] [date] NULL,
	[roleNV] [varchar](10) NULL,
	[luong] [int] NULL,
 CONSTRAINT [PK_NhanVien] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhomSanPham]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhomSanPham](
	[maNhomSP] [varchar](10) NOT NULL,
	[tenNhomSP] [nvarchar](50) NULL,
 CONSTRAINT [PK_NhomSanPham] PRIMARY KEY CLUSTERED 
(
	[maNhomSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhuongXa]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhuongXa](
	[maPhuongXa] [varchar](10) NOT NULL,
	[tenPhuongXa] [nvarchar](100) NULL,
	[maQuanHuyen] [varchar](10) NULL,
 CONSTRAINT [PK_PhuongXa] PRIMARY KEY CLUSTERED 
(
	[maPhuongXa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuanHuyen]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuanHuyen](
	[maQuanHuyen] [varchar](10) NOT NULL,
	[tenQuanHuyen] [nvarchar](100) NULL,
	[maTinhTP] [varchar](10) NULL,
 CONSTRAINT [PK_QuanHuyen] PRIMARY KEY CLUSTERED 
(
	[maQuanHuyen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[maSP] [varchar](10) NOT NULL,
	[tenSP] [nvarchar](50) NULL,
	[anhSP] [varchar](500) NULL,
	[moTaSP] [nvarchar](500) NULL,
	[ngayDang] [date] NULL,
	[giaSP] [int] NULL,
	[soLuongTon] [int] NULL,
	[soSPDaBan] [int] NULL,
	[avgRating] [float] NULL,
	[soRating] [int] NULL,
	[loaiSP] [varchar](10) NULL,
	[account_CH] [varchar](10) NULL,
 CONSTRAINT [PK_SanPham] PRIMARY KEY CLUSTERED 
(
	[maSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shipper]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shipper](
	[accountID] [varchar](10) NOT NULL,
	[hoTen] [varchar](100) NULL,
	[CMND] [varchar](20) NULL,
	[ngaySinh] [date] NULL,
	[bienSo] [varchar](10) NULL,
	[maBangLai] [varchar](20) NULL,
	[SDT] [varchar](20) NULL,
	[email] [varchar](50) NULL,
	[status] [bit] NULL,
	[diaChi] [nvarchar](100) NULL,
	[maPhuongXa] [varchar](10) NULL,
 CONSTRAINT [PK_Shipper] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaiKhoan]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaiKhoan](
	[accountID] [varchar](10) NOT NULL,
	[username] [varchar](20) NULL,
	[password] [varchar](50) NULL,
	[role] [varchar](10) NULL,
	[token] [varchar](200) NULL,
 CONSTRAINT [PK_TaiKhoan] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TinhThanhPho]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinhThanhPho](
	[maTinhTP] [varchar](10) NOT NULL,
	[tenTinhTP] [nvarchar](100) NULL,
 CONSTRAINT [PK_TinhTP] PRIMARY KEY CLUSTERED 
(
	[maTinhTP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrangThai]    Script Date: 08/01/2022 11:54:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrangThai](
	[statusCode] [varchar](10) NOT NULL,
	[trangThai] [nvarchar](100) NULL,
 CONSTRAINT [PK_TrangThai] PRIMARY KEY CLUSTERED 
(
	[statusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00101', N'sp001', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00201', N'sp001', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00101', N'sp008', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00101', N'sp015', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00101', N'sp022', 2)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00102', N'sp065', 2)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00102', N'sp072', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp073', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp080', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp087', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp094', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp101', 1)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00103', N'sp108', 5)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00201', N'sp113', 3)
INSERT [dbo].[ChiTietHoaDon] ([maHD], [maSP], [soLuong]) VALUES (N'kh00201', N'sp120', 2)
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch001', N'Hoàng Việt Shop', N'123456789', CAST(N'2021-12-29' AS Date), N'0123456789', N'mail1@gmail.com', N'đâu đó', N'hcm0201', N'ajsd3213212', N'a5sd465a4sd')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch002', N'Thành Danh Hàng', N'123456781', CAST(N'2021-12-29' AS Date), N'0123456781', N'mail2@gmail.com', N'đằng nọ', N'hcm0306', N'as1df3a5sdf465', N'a5sd4a65s4d')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch003', N'Hải Đăng Sạp', N'123456782', CAST(N'2021-12-29' AS Date), N'0123456782', N'mail3@gmail.com', N'chỗ đó đó', N'hcm0901', N'a3sdf1asdf21', N'z2v13354')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch004', N'Quốc Thịnh Quầy', N'123456783', CAST(N'2021-12-29' AS Date), N'0123456783', N'mail4@gmail.com', N'chỗ kia', N'hcm1205', N'asdfas54df564', N'sf56h4e686r4')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch005', N'Nam', N'123456783', CAST(N'2021-12-29' AS Date), N'0123456783', N'mail5@gmail.com', N'ở đằng kia', N'hcmcg03', N'as6df5468w', N'fb13e5r46b8')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch006', N'Ngọc', N'123456783', CAST(N'2021-12-29' AS Date), N'0123456783', N'mail6@gmail.com', N'chỗ nọ', N'hcmtd01', N'sdf121sd31', N'2w154cx84vs')
INSERT [dbo].[CuaHang] ([accountID], [tenCH], [CMND], [ngayThamGia], [SDT], [email], [diaChi], [maPhuongXa], [maGPKD], [maCNATTP]) VALUES (N'ch007', N'Trâm', N'123456783', CAST(N'2021-12-29' AS Date), N'0123456783', N'mail7@gmail.com', N'đằng đó', N'hcmtp01', N'sdf45646sd4f89as', N'sdf123ew156w4r')
INSERT [dbo].[DiaChiKhachHang] ([maDC], [accountID], [diaChi], [isDefault], [maPhuongXa]) VALUES (N'kh00101', N'kh001', N'Đông Thổ Đại Đường', 0, N'hcm1202')
INSERT [dbo].[DiaChiKhachHang] ([maDC], [accountID], [diaChi], [isDefault], [maPhuongXa]) VALUES (N'kh00102', N'kh001', N'Tây Thiên', 1, N'hcm0901')
INSERT [dbo].[DiaChiKhachHang] ([maDC], [accountID], [diaChi], [isDefault], [maPhuongXa]) VALUES (N'kh00201', N'kh002', N'Hoa Quả Sơn', 1, N'hcm0502')
INSERT [dbo].[DiaChiKhachHang] ([maDC], [accountID], [diaChi], [isDefault], [maPhuongXa]) VALUES (N'kh00301', N'kh003', N'Bồng Lai', 1, N'hcm0101')
INSERT [dbo].[DiaChiKhachHang] ([maDC], [accountID], [diaChi], [isDefault], [maPhuongXa]) VALUES (N'kh00202', N'kh002', N'Ngũ Hành Sơn', 0, N'hcmbt01')
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp002', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp016', 2)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp017', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp020', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp100', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp111', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh001', N'sp112', 1)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh003', N'sp001', 10)
INSERT [dbo].[GioHang] ([accountID], [maSP], [soLuong]) VALUES (N'kh003', N'sp003', 1)
INSERT [dbo].[HinhThucThanhToan] ([maTT], [tenTT], [moTaTT]) VALUES (N'hb001', N'hong biet', N'hong bít')
INSERT [dbo].[HinhThucThanhToan] ([maTT], [tenTT], [moTaTT]) VALUES (N'hb002', N'chac la momo', N'hong bít')
INSERT [dbo].[HinhThucThanhToan] ([maTT], [tenTT], [moTaTT]) VALUES (N'hb003', N'zalopay thi sao', N'trả tiền nè')
INSERT [dbo].[HinhThucThanhToan] ([maTT], [tenTT], [moTaTT]) VALUES (N'hb004', N'viettelpay cung dc', N'hong trả đâu')
INSERT [dbo].[HoaDon] ([maHD], [ngayLap], [phiShip], [tongTien], [maDCKH], [account_S], [account_CH], [account_KH], [hinhThucTT]) VALUES (N'kh00101', CAST(N'2021-01-07' AS Date), 20000, 319000, N'kh00101', N'sp0201', N'ch001', N'kh001', N'hb001')
INSERT [dbo].[HoaDon] ([maHD], [ngayLap], [phiShip], [tongTien], [maDCKH], [account_S], [account_CH], [account_KH], [hinhThucTT]) VALUES (N'kh00102', CAST(N'2021-01-07' AS Date), 20000, 523000, N'kh00101', N'sp0306', N'ch002', N'kh001', N'hb004')
INSERT [dbo].[HoaDon] ([maHD], [ngayLap], [phiShip], [tongTien], [maDCKH], [account_S], [account_CH], [account_KH], [hinhThucTT]) VALUES (N'kh00103', CAST(N'2021-01-06' AS Date), 20000, 1026000, N'kh00102', N'sp0901', N'ch003', N'kh001', N'hb003')
INSERT [dbo].[HoaDon] ([maHD], [ngayLap], [phiShip], [tongTien], [maDCKH], [account_S], [account_CH], [account_KH], [hinhThucTT]) VALUES (N'kh00201', CAST(N'2021-01-01' AS Date), 20000, 564000, N'kh00201', N'sp0201', N'ch001', N'kh002', N'hb002')
INSERT [dbo].[KhachHang] ([accountID], [hoTen], [CMND], [ngaySinh], [gioiTinh], [SDT], [email]) VALUES (N'kh001', N'Đường Huyền Trang', N'01234567890', CAST(N'2000-01-04' AS Date), N'Nam', N'01234567890', N'thphat@gmail.com')
INSERT [dbo].[KhachHang] ([accountID], [hoTen], [CMND], [ngaySinh], [gioiTinh], [SDT], [email]) VALUES (N'kh002', N'Tôn Ngộ Không', N'01234567891', CAST(N'2000-07-21' AS Date), N'Nữ', N'01234567891', N'tmthu@gmail.com')
INSERT [dbo].[KhachHang] ([accountID], [hoTen], [CMND], [ngaySinh], [gioiTinh], [SDT], [email]) VALUES (N'kh003', N'Trư Bát Giới', N'01234567892', CAST(N'2000-11-20' AS Date), N'Nữ', N'01234567892', N'htvi@gmail.com')
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00101', CAST(N'2021-01-07T05:00:00.000' AS DateTime), N's1', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00101', CAST(N'2021-01-07T05:10:00.000' AS DateTime), N's2', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00101', CAST(N'2021-01-07T05:20:00.000' AS DateTime), N's3', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00101', CAST(N'2021-01-07T05:30:00.000' AS DateTime), N's4', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00102', CAST(N'2021-01-07T05:00:00.000' AS DateTime), N's1', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00102', CAST(N'2021-01-07T05:10:00.000' AS DateTime), N's2', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00102', CAST(N'2021-01-07T05:20:00.000' AS DateTime), N's3', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00102', CAST(N'2021-01-07T05:30:00.000' AS DateTime), N's4', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00103', CAST(N'2021-01-06T05:00:00.000' AS DateTime), N's1', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00103', CAST(N'2021-01-06T05:10:00.000' AS DateTime), N's2', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00103', CAST(N'2021-01-06T05:20:00.000' AS DateTime), N's3', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00103', CAST(N'2021-01-06T05:30:00.000' AS DateTime), N's4', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00201', CAST(N'2021-01-01T05:00:00.000' AS DateTime), N's1', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00201', CAST(N'2021-01-01T05:10:00.000' AS DateTime), N's2', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00201', CAST(N'2021-01-01T05:20:00.000' AS DateTime), N's3', NULL)
INSERT [dbo].[LichSuGiaoHang] ([maHD], [thoiGian], [statusCode], [ghiChu]) VALUES (N'kh00201', CAST(N'2021-01-01T05:30:00.000' AS DateTime), N's4', NULL)
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp001', N'Sản phẩm thịt', N'nsp001')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp002', N'Sản phẩm thuỷ sản', N'nsp001')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp003', N'Sản phẩm rau xanh', N'nsp001')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp004', N'Sản phẩm trái cây', N'nsp001')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp005', N'Sản phẩm trứng', N'nsp001')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp006', N'Bánh kẹo', N'nsp002')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp007', N'Gia vị', N'nsp002')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp008', N'Đồ ăn nhanh', N'nsp002')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp009', N'Đồ ăn đóng hộp', N'nsp002')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp010', N'Nước uống các loại', N'nsp002')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp011', N'Gạo các loại', N'nsp003')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp012', N'Củ, quả', N'nsp003')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp013', N'Sản phẩm bột, tinh bột', N'nsp003')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp014', N'Khẩu trang', N'nsp004')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp015', N'Sản phẩm kháng khuẩn', N'nsp004')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp016', N'Sản phảm vệ sinh cá nhân', N'nsp004')
INSERT [dbo].[LoaiSanPham] ([maLoaiSP], [tenLoaiSP], [maNhomSP]) VALUES (N'lsp017', N'Sản phẩm tẩy rửa', N'nsp004')
INSERT [dbo].[NhanVien] ([accountID], [hoTen], [CMND], [ngaySinh], [roleNV], [luong]) VALUES (N'admin', N'Đăng', NULL, NULL, N'boss', 0)
INSERT [dbo].[NhanVien] ([accountID], [hoTen], [CMND], [ngaySinh], [roleNV], [luong]) VALUES (N'nv001', N'Huỳnh Rose', N'023154665421', CAST(N'2000-01-04' AS Date), N'nv', 10000000)
INSERT [dbo].[NhanVien] ([accountID], [hoTen], [CMND], [ngaySinh], [roleNV], [luong]) VALUES (N'nv002', N'Jun Vũ', N'023154665421', CAST(N'2000-01-04' AS Date), N'nv', 3000000)
INSERT [dbo].[NhanVien] ([accountID], [hoTen], [CMND], [ngaySinh], [roleNV], [luong]) VALUES (N'nv003', N'Nguyễn IU', N'023154665421', CAST(N'2000-01-04' AS Date), N'nv', 15000000)
INSERT [dbo].[NhomSanPham] ([maNhomSP], [tenNhomSP]) VALUES (N'nsp001', N'Thực phẩm tươi sống')
INSERT [dbo].[NhomSanPham] ([maNhomSP], [tenNhomSP]) VALUES (N'nsp002', N'Công nghệ phẩm')
INSERT [dbo].[NhomSanPham] ([maNhomSP], [tenNhomSP]) VALUES (N'nsp003', N'Lương thực')
INSERT [dbo].[NhomSanPham] ([maNhomSP], [tenNhomSP]) VALUES (N'nsp004', N'Nhu yếu phẩm cần thiết')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0101', N'Bến Nghé', N'hcm01')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0102', N'Bến Thành', N'hcm01')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0103', N'Phạm Ngũ Lão', N'hcm01')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0104', N'Đa Kao', N'hcm01')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0105', N'Cầu Ông Lãnh', N'hcm01')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0201', N'Thảo Điền', N'hcm02')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0202', N'Cát Lái', N'hcm02')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0203', N'Thủ Thiêm', N'hcm02')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0204', N'An Phú', N'hcm02')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0205', N'Bình Trưng Đông', N'hcm02')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0301', N'1', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0302', N'2', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0303', N'3', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0304', N'4', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0305', N'5', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0306', N'Võ Thị Sáu', N'hcm03')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0401', N'1', N'hcm04')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0402', N'2', N'hcm04')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0403', N'3', N'hcm04')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0404', N'4', N'hcm04')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0405', N'15', N'hcm04')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0501', N'1', N'hcm05')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0502', N'2', N'hcm05')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0503', N'3', N'hcm05')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0504', N'4', N'hcm05')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0505', N'5', N'hcm05')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0601', N'1', N'hcm06')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0602', N'2', N'hcm06')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0603', N'3', N'hcm06')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0604', N'4', N'hcm06')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0605', N'5', N'hcm06')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0701', N'Bình Thuận', N'hcm07')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0702', N'Phú Thuận', N'hcm07')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0703', N'Tân Phú', N'hcm07')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0704', N'Phú Mỹ', N'hcm07')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0705', N'Tân Hưng', N'hcm07')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0801', N'Xóm Củi', N'hcm08')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0802', N'Hưng Phú', N'hcm08')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0803', N'Bình An', N'hcm08')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0804', N'Chánh Hưng', N'hcm08')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0805', N'Rạch Ông', N'hcm08')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0901', N'Hiệp Phú', N'hcm09')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0902', N'Long Bình', N'hcm09')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0903', N'Long Phước', N'hcm09')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0904', N'Phước Long A', N'hcm09')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm0905', N'Phước Long B', N'hcm09')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1001', N'1', N'hcm10')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1002', N'2', N'hcm10')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1003', N'13', N'hcm10')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1004', N'14', N'hcm10')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1005', N'15', N'hcm10')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1101', N'1', N'hcm11')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1102', N'2', N'hcm11')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1103', N'3', N'hcm11')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1104', N'4', N'hcm11')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1105', N'5', N'hcm11')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1201', N'Tân Thới Nhất', N'hcm12')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1202', N'Đông Hưng Thuận', N'hcm12')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1203', N'Trung Mỹ Tây', N'hcm12')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1204', N'Tân Chánh Hiệp', N'hcm12')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcm1205', N' ', N'hcm12')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbc01', N'An Phú Tây', N'hcmbc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbc02', N'Bình Hưng', N'hcmbc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbc03', N'Bình Lợi', N'hcmbc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbc04', N'Đa Phước', N'hcmbc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbc05', N'Hưng Long', N'hcmbc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbtan01', N'Bình Hưng Hoà', N'hcmbtan')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbtan02', N'Bình Hưng Hoà A', N'hcmbtan')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbtan03', N'Bình Hưng Hoà B', N'hcmbtan')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbtan04', N'Bình Trị Đông A', N'hcmbtan')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbtan05', N'Bình Trị Đông B', N'hcmbtan')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbthanh1', N'1', N'hcmbthanh')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbthanh2', N'2', N'hcmbthanh')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbthanh3', N'3', N'hcmbthanh')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbthanh4', N'14', N'hcmbthanh')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmbthanh5', N'15', N'hcmbthanh')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcc01', N'An Nhơn Tây', N'hcmcc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcc02', N'Bình Mỹ', N'hcmcc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcc03', N'Hoà Phú', N'hcmcc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcc04', N'Nhuận Đức', N'hcmcc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcc05', N'Phú Mỹ Hưng', N'hcmcc')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcg01', N'Cần Thạnh', N'hcmcg')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcg02', N'Đồng Hoà', N'hcmcg')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcg03', N'Long Lạnh', N'hcmcg')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcg04', N'Thạnh An', N'hcmcg')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmcg05', N'Tân Thạnh', N'hcmcg')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmgv01', N'11', N'hcmgv')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmgv02', N'12', N'hcmgv')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmgv03', N'13', N'hcmgv')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmgv04', N'14', N'hcmgv')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmgv05', N'15', N'hcmgv')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmhm01', N'Bà Điểm', N'hcmhm')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmhm02', N'Đông Thạnh', N'hcmhm')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmhm03', N'Nhị Bình', N'hcmhm')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmhm04', N'Tân Hiệp', N'hcmhm')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmhm05', N'Tân Xuân', N'hcmhm')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmnb01', N'Hiệp Phước', N'hcmnb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmnb02', N'Long Thới', N'hcmnb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmnb03', N'Nhơn Đức', N'hcmnb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmnb04', N'Phú Xuân', N'hcmnb')
GO
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmnb05', N'Phước Lộc', N'hcmnb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmpn01', N'1', N'hcmpn')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmpn02', N'2', N'hcmpn')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmpn03', N'3', N'hcmpn')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmpn04', N'4', N'hcmpn')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmpn05', N'5', N'hcmpn')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtb01', N'1', N'hcmtb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtb02', N'2', N'hcmtb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtb03', N'3', N'hcmtb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtb04', N'4', N'hcmtb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtb05', N'5', N'hcmtb')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtd01', N'Bình Chiểu', N'hcmtd')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtd02', N'Bình Thọ', N'hcmtd')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtd03', N'Linh Chiểu', N'hcmtd')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtd04', N'Linh Đông', N'hcmtd')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtd05', N'Linh Tây', N'hcmtd')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtp01', N'Tân Sơn Nhì', N'hcmtp')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtp02', N'Tân Quý', N'hcmtp')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtp03', N'Tân Thành', N'hcmtp')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtp04', N'Phú Thạnh', N'hcmtp')
INSERT [dbo].[PhuongXa] ([maPhuongXa], [tenPhuongXa], [maQuanHuyen]) VALUES (N'hcmtp05', N'Phú Trung', N'hcmtp')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm01', N'Quận 1', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm02', N'Quận 2', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm03', N'Quận 3', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm04', N'Quận 4', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm05', N'Quận 5', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm06', N'Quận 6', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm07', N'Quận 7', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm08', N'Quận 8', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm09', N'Quận 9', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm10', N'Quận 10', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm11', N'Quận 11', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcm12', N'Quận 12', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmbc', N'Huyện Bình Chánh', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmbtan', N'Quận Bình Tân', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmbthanh', N'Quận Bình Thạnh', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmcc', N'Huyện Cửu Chi', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmcg', N'Huyện Cần Giờ', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmgv', N'Quận Gò Vấp', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmhm', N'Huyện Hóc Môn', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmnb', N'Huyện Nhà Bè', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmpn', N'Quận Phú Nhuận', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmtb', N'Quận Tân Bình', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmtd', N'TP.Thủ Đức', N'hcm')
INSERT [dbo].[QuanHuyen] ([maQuanHuyen], [tenQuanHuyen], [maTinhTP]) VALUES (N'hcmtp', N'Quận Tân Phú', N'hcm')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp001', N'Thịt ba rọi heo tươi C.P khay 500g', N'https://cdn.tgdd.vn/Products/Images/8781/228329/bhx/ba-roi-heo-khay-500g-202111262046493617_300x300.jpg', N'1  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 91000, 50, 20, 4.9, 7, N'lsp001', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp002', N'Thịt heo xay nhuyễn G khay 300g', N'https://cdn.tgdd.vn/Products/Images/8781/245247/bhx/thit-heo-xay-nhap-khau-tam-uop-bach-hoa-xanh-tui-250g-202107081024096978_300x300.jpeg', N'2  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 52000, 50, 30, 5, 7, N'lsp001', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp003', N'Ba chỉ bò Úc tươi Pacow khay 250g', N'https://cdn.tgdd.vn/Products/Images/8139/223384/bhx/thit-ba-chi-bo-uc-pacow-khay-250g-202112031540589978_300x300.jpg', N'3  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 69000, 50, 40, 4.7, 7, N'lsp001', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp004', N'Đùi bò nhập khẩu đông lạnh 500g', N'https://cdn.tgdd.vn/Products/Images/8139/248985/bhx/dui-bo-nhap-khau-dong-lanh-tui-500g-202112011309162462_300x300.jpg', N'4  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 129000, 50, 50, 4.1, 7, N'lsp001', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp005', N'Bò bít tết nhập khẩu túi 500g', N'https://cdn.tgdd.vn/Products/Images/8139/251113/bhx/bo-bit-tet-nhap-khau-dong-lanh-500g-202110182314025728_300x300.jpg', N'5  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 175000, 50, 60, 4.2, 7, N'lsp001', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp006', N'Cá tuyết cắt khoanh Camimex 270g', N'https://cdn.tgdd.vn/Products/Images/8400/237142/bhx/ca-tuyet-cat-khoanh-dong-lanh-camimex-khay-270g-202110051720313373_300x300.jpg', N'6  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 81000, 50, 40, 4.7, 7, N'lsp002', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp007', N'Cá rô đông lạnh HDC khay 300g', N'https://cdn.tgdd.vn/Products/Images/8400/265728/bhx/ca-ro-dong-lanh-hdc-khay-300g-202112281045348189_300x300.jpg', N'7  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 68000, 50, 50, 4.7, 7, N'lsp002', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp008', N'Cá saba tẩm sa tế Mama Food 500g', N'https://cdn.tgdd.vn/Products/Images/8400/236832/bhx/ca-saba-tam-sa-te-dong-lanh-mama-food-goi-500g-202106031459313095_300x300.jpg', N'8  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 75000, 50, 80, 4.1, 7, N'lsp002', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp009', N'Rau dền tươi 4KFarm gói 500g', N'https://cdn.tgdd.vn/Products/Images/8784/267911/bhx/rau-den-tuoi-4kfarm-goi-500g-202112311751437193_300x300.jpg', N'9  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 15000, 50, 50, 4.7, 7, N'lsp003', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp010', N'Rau cải bẹ xanh 4KFarm gói 500g', N'https://cdn.tgdd.vn/Products/Images/8784/267907/bhx/rau-cai-be-xanh-4kfarm-goi-500g-202112310837219331_300x300.jpg', N'10  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 15000, 50, 60, 5, 7, N'lsp003', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp011', N'Bắp cải trắng tươi giòn túi 500g', N'https://cdn.tgdd.vn/Products/Images/8820/226964/bhx/bap-cai-trai-tim-tui-500g-202103031616594887_300x300.jpg', N'11  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 15000, 50, 10, 4.1, 7, N'lsp003', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp012', N'Hành lá tươi xanh túi nhỏ 50g', N'https://cdn.tgdd.vn/Products/Images/8820/267830/bhx/hanh-huong-goi-100g-202201031326288587_300x300.jpg', N'12  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 2700, 50, 20, 4.7, 7, N'lsp003', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp013', N'Rau cải bẹ dúng 4KFarm gói 500g', N'https://cdn.tgdd.vn/Products/Images/8784/267913/bhx/cai-dun-4kfarm-goi-500g-202112310847467515_300x300.jpg', N'13  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 15000, 50, 30, 4.2, 7, N'lsp003', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp014', N'Xoài keo giòn túi 1kg (2-4 trái)', N'https://cdn.tgdd.vn/Products/Images/8788/233096/bhx/xoai-keo-tui-1kg-202103041527383985_300x300.jpg', N'14  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 23000, 50, 50, 4.1, 7, N'lsp004', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp015', N'Táo nữ hoàng Queen nhập khẩu 1kg', N'https://cdn.tgdd.vn/Products/Images/8788/233534/bhx/tao-gala-mini-nhap-khau-hop-1kg-9-12-trai-202111271617304385_300x300.jpg', N'15  Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 69000, 50, 40, 4.7, 7, N'lsp004', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp016', N'Lê Nam Phi nhập khẩu túi 1kg', N'https://cdn.tgdd.vn/Products/Images/8788/202856/bhx/le-nam-phi-nhap-khau-tui-1kg-202111011350231474_300x300.jpeg', N'16 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 79000, 50, 60, 4.5, 7, N'lsp004', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp017', N'Hộp 10 trứng gà tươi Happy Egg', N'https://cdn.tgdd.vn/Products/Images/8783/228775/bhx/hop-10-trung-ga-tuoi-happy-egg-202111251039108874_300x300.jpg', N'17 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 31000, 50, 20, 4.1, 7, N'lsp005', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp018', N'Hộp 6 trứng gà ta tươi sạch V.Farm', N'https://cdn.tgdd.vn/Products/Images/8783/226998/bhx/hop-6-trung-ga-ta-tfood-6-trung-202112161431505663.jpg', N'18 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 22000, 50, 30, 4.7, 7, N'lsp005', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp019', N'Hộp 4 trứng vịt bắc thảo V.Farm', N'https://cdn.tgdd.vn/Products/Images/8783/228771/bhx/hop-4-trung-vit-bac-thao-tfood-4-trung-202112271013535267_300x300.jpg', N'19 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 26000, 50, 50, 4.1, 7, N'lsp005', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp020', N'Hộp 30 trứng cút tươi sạch V.Farm', N'https://cdn.tgdd.vn/Products/Images/8783/219097/bhx/hop-30-trung-cut-tuoi-tfood-30-trung-202112161359548266.jpg', N'20 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 25000, 50, 40, 4.9, 7, N'lsp005', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp021', N'Bánh gạo vị ngọt dịu One One 230g', N'https://cdn.tgdd.vn/Products/Images/3361/83221/bhx/banh-gao-vi-ngot-diu-one-one-goi-230g-202104212208193998_300x300.jpg', N'21 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 30400, 200, 50, 4.1, 7, N'lsp006', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp022', N'Bánh xốp kem bơ Sapporo Chocky 80g', N'https://cdn.tgdd.vn/Products/Images/3360/224710/bhx/banh-xop-kem-bo-sapporo-chocky-goi-80g-202104261650094933_300x300.jpg', N'22 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 32000, 200, 60, 4.7, 7, N'lsp006', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp023', N'Bánh gạo vị tôm mè đen Tê Tê 120g', N'https://cdn.tgdd.vn/Products/Images/3361/265383/bhx/banh-gao-nuong-vi-tom-me-den-te-te-gao-nhat-goi-120g-202112280933490544_300x300.jpg', N'23 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 13500, 200, 20, 4.9, 7, N'lsp006', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp024', N'Bánh gạo ngọt tự nhiên Tê Tê 200g', N'https://cdn.tgdd.vn/Products/Images/3361/265385/bhx/banh-gao-nuong-vi-ngot-tu-nhien-te-te-gao-nhat-goi-200g-202112280932578049_300x300.jpg', N'24 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 17500, 200, 30, 4.1, 7, N'lsp006', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp025', N'Bánh Orion sợi thịt gà 5 cái x 17g', N'https://cdn.tgdd.vn/Products/Images/3358/206825/bhx/banh-bong-lan-soi-thit-ga-orion-cest-bon-goi-85g-5-banh-202104241328436731_300x300.jpg', N'25 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 21600, 200, 50, 4.7, 7, N'lsp006', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp026', N'Bánh kem trứng hộp 12 cái x 23.5g', N'https://cdn.tgdd.vn/Products/Images/3358/77006/bhx/banh-kem-trung-custas-hop-282g-12-cai-202104241325547370_300x300.jpg', N'26 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 60000, 200, 40, 4.9, 7, N'lsp006', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp027', N'Bánh kem bơ sữa Hura 20 cái x 15g', N'https://cdn.tgdd.vn/Products/Images/3358/102595/bhx/banh-trung-cuon-kem-bo-sua-hura-swissroll-hop-360g-20-cai-202104241318084910_300x300.jpg', N'27 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 200, 60, 4.1, 7, N'lsp006', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp028', N'Bánh kem lá dứa Solite 20 cáix18g', N'https://cdn.tgdd.vn/Products/Images/3358/79427/bhx/banh-bong-lan-cuon-kem-vi-la-dua-solite-hop-360g-20-cai-202107141336020320_300x300.jpg', N'28 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 47400, 200, 80, 4.9, 7, N'lsp006', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp029', N'Muối I-ốt tinh sấy Bạc Liêu 500g', N'https://cdn.tgdd.vn/Products/Images/2803/82126/bhx/muoi-i-ot-bac-lieu-goi-500g-202104200949296848_300x300.jpg', N'29 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 5800, 200, 90, 5, 7, N'lsp007', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp030', N'Gia húng lìu DH Food Natural 10g', N'https://cdn.tgdd.vn/Products/Images/8271/225137/bhx/gia-vi-hung-liu-dh-food-natural-goi-10g-202104201112151493_300x300.jpg', N'30 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 7500, 200, 70, 4.1, 7, N'lsp007', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp031', N'Muối tinh sấy iot Sosal Group 1kg', N'https://cdn.tgdd.vn/Products/Images/2803/210392/bhx/muoi-tinh-say-bo-sung-i-ot-sosalco-goi-1kg-202104201007031578_300x300.jpg', N'31 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 5900, 200, 50, 4.7, 7, N'lsp007', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp032', N'Thảo quả Dh Food Natural hũ 20g', N'https://cdn.tgdd.vn/Products/Images/8275/216077/bhx/thao-qua-dh-food-natural-hu-20g-202103030725378265_300x300.jpg', N'32 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 17000, 200, 40, 4.9, 7, N'lsp007', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp033', N'Nước mắm cá cơm 584 Nha Trang 1lít', N'https://cdn.tgdd.vn/Products/Images/2289/82702/bhx/nuoc-mam-ca-com-584-nha-trang-15-do-dam-chai-1-lit-202104191502583541_300x300.jpg', N'33 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 200, 60, 4.2, 7, N'lsp007', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp034', N'Điều đỏ bột Dh Food Natural hũ 50g', N'https://cdn.tgdd.vn/Products/Images/8275/212183/bhx/dieu-do-bot-dh-food-natural-hu-50g-202104221020170592_300x300.jpg', N'34 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 13000, 200, 50, 4.1, 7, N'lsp007', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp035', N'Sốt gia kho hoàn hảo O''food 240g', N'https://cdn.tgdd.vn/Products/Images/8271/223772/bhx/sot-kho-hoan-hao-ofood-hu-240g-202104201044346116_300x300.jpg', N'35 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 23000, 200, 60, 4.2, 7, N'lsp007', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp036', N'Dầu đậu nành tự nhiên Coba 400ml', N'https://cdn.tgdd.vn/Products/Images/2286/227393/bhx/dau-dau-nanh-tu-nhien-coba-chai-400ml-202104141705113907_300x300.jpg', N'36 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 19000, 200, 50, 4.9, 7, N'lsp007', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp037', N'Ớt bột xay nhuyễn Natas hũ nhỏ 45g', N'https://cdn.tgdd.vn/Products/Images/3526/174539/bhx/ot-bot-natas-hu-45g-202103011612299719_300x300.jpg', N'37 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 19000, 200, 80, 4.1, 7, N'lsp007', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp038', N'Muối tôm kiểu Tây Ninh Guyumi 60g', N'https://cdn.tgdd.vn/Products/Images/2803/233027/bhx/muoi-tom-kieu-tay-ninh-guyumi-chai-60g-202104200945016422_300x300.jpg', N'38 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 7500, 200, 50, 4.2, 7, N'lsp007', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp039', N'Mì Nongshim Sarigomtang vị bò 110g', N'https://cdn.tgdd.vn/Products/Images/2565/244111/bhx/mi-nongshim-sarigomtangmyun-vi-bo-goi-110g-202112301046176481_300x300.jpg', N'39 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 23000, 200, 90, 4.1, 7, N'lsp008', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp040', N'30 gói mì Kokomi 90 chua cay 90g', N'https://cdn.tgdd.vn/Products/Images/2565/212760/bhx/thung-30-goi-mi-kokomi-90-tom-chua-cay-90g-202103040013089057_300x300.jpg', N'40 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 80000, 20, 60, 4.9, 7, N'lsp008', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp041', N'24 gói mì Vifon gà bạc Ba Lan 70g', N'https://cdn.tgdd.vn/Products/Images/2565/248333/bhx/thung-24-goi-mi-vifon-ga-bac-ba-lan-70g-202110200810171466_300x300.jpg', N'41 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 90000, 20, 50, 4.1, 7, N'lsp008', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp042', N'Mì Chapaguri siêu cay gói 140g', N'https://cdn.tgdd.vn/Products/Images/2565/244121/bhx/mi-nongshim-chapaguri-ram-don-super-spicy-sieu-cay-goi-140g-202107101733187861_300x300.jpg', N'42 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 26000, 100, 40, 4.7, 7, N'lsp008', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp043', N'Cháo tươi yến hạt sen Cây Thị 260g', N'https://cdn.tgdd.vn/Products/Images/2564/229442/bhx/chao-tuoi-yen-hat-sen-la-dua-cay-thi-goi-260g-202102251713299946_300x300.jpg', N'43 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 31500, 100, 80, 4.1, 7, N'lsp008', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp044', N'Mì xào Nongshim hải sản cay 137g', N'https://cdn.tgdd.vn/Products/Images/2565/174708/bhx/mi-xao-kho-nongshim-neoguri-hai-san-cay-goi-137g-202102282145138867_300x300.jpg', N'44 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 20500, 100, 70, 4.9, 7, N'lsp008', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp045', N'Hủ tiếu Sa Đéc Bích Chi gói 60g', N'https://cdn.tgdd.vn/Products/Images/2965/96185/bhx/hu-tieu-sa-dec-bich-chi-goi-60g-202102281025559500_300x300.jpg', N'45 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 4500, 100, 80, 4.1, 7, N'lsp008', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp046', N'Hủ tiếu Nam Vang Cung Đình gói 78g', N'https://cdn.tgdd.vn/Products/Images/2965/227016/bhx/hu-tieu-nam-vang-cung-dinh-goi-78g-202102281038586698_300x300.jpg', N'46 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 8700, 100, 70, 5, 7, N'lsp008', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp047', N'30 gói Hảo Hảo tôm chua cay 75g', N'https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202110111028170289_300x300.jpg', N'47 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 80000, 30, 80, 4.9, 7, N'lsp008', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp048', N'Topokki truyền thống O''food 140g', N'https://cdn.tgdd.vn/Products/Images/7162/223782/bhx/banh-gao-topokki-ofood-vi-truyen-thong-goi-140g-202104262333069309_300x300.jpg', N'48 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 25000, 50, 90, 4.2, 7, N'lsp008', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp049', N'Cá ngừ trắng ngâm dầu Dongwon 150g', N'https://cdn.tgdd.vn/Products/Images/3237/222187/bhx/ca-ngu-trang-ngam-dau-dongwon-lon-150g-202104221534285287_300x300.jpg', N'49 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 43500, 50, 80, 4.7, 7, N'lsp009', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp050', N'Cá ngừ vị ớt cay Dongwon lon 150g', N'https://cdn.tgdd.vn/Products/Images/3237/222193/bhx/ca-ngu-vi-ot-cay-dongwon-lon-150g-202104221533007406_300x300.jpg', N'50 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 43500, 50, 90, 4.9, 7, N'lsp009', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp051', N'Cá trích ngâm dầu Sea Crown 125g', N'https://cdn.tgdd.vn/Products/Images/3237/109489/bhx/ca-trich-ngam-dau-sea-crown-hop-125g-202104260947490181_300x300.jpeg', N'51 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 19500, 50, 80, 4.2, 7, N'lsp009', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp052', N'Cá mòi sốt cà chua Bigcan lon 140g', N'https://cdn.tgdd.vn/Products/Images/3237/222611/bhx/ca-moi-sot-ca-chua-bigcan-lon-140g-202109091108544593_300x300.jpg', N'52 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 17000, 50, 20, 4.7, 7, N'lsp009', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp053', N'6 chai trà ô long Tea Plus 350ml', N'https://cdn.tgdd.vn/Products/Images/8938/193431/bhx/6-chai-tra-o-long-tea-plus-350ml-202103290356285529_300x300.jpg', N'53 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 42000, 200, 50, 4.9, 7, N'lsp010', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp054', N'Thùng 24 chai trà Tea Plus 350ml', N'https://cdn.tgdd.vn/Products/Images/8938/83613/bhx/thung-24-chai-tra-o-long-tea-plus-350ml-202103290356521800_300x300.jpg', N'54 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 160000, 20, 60, 4.2, 7, N'lsp010', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp055', N'24 lon All Free vị lúa mạch 330ml', N'https://cdn.tgdd.vn/Products/Images/2443/238096/bhx/thung-24-lon-nuoc-giai-khat-co-gas-khong-con-all-free-vi-lua-mach-330ml-202107071402359857_300x300.jpg', N'55 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 250000, 20, 10, 4.5, 7, N'lsp010', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp056', N'6 chai nước hồng trà vải C2 455ml', N'https://cdn.tgdd.vn/Products/Images/8938/224673/bhx/6-chai-hong-tra-vai-c2-455ml-202103290345081245_300x300.jpg', N'56 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 54000, 200, 30, 4.9, 7, N'lsp010', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp057', N'6 chai nước có gas Sprite 600ml', N'https://cdn.tgdd.vn/Products/Images/2443/203161/bhx/6-chai-nuoc-ngot-sprite-huong-chanh-600ml-202105141345168075.jpg', N'57 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 30000, 100, 50, 4.2, 7, N'lsp010', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp058', N'6 chai Fanta hương soda kem 600ml', N'https://cdn.tgdd.vn/Products/Images/2443/219805/bhx/6-chai-nuoc-ngot-co-ga-fanta-huong-soda-kem-trai-cay-600ml-202103202216192813_300x300.jpg', N'58 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 30000, 100, 50, 4.7, 7, N'lsp010', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp059', N'6 chai nước ngọt Coca Cola 600ml', N'https://cdn.tgdd.vn/Products/Images/2443/231530/bhx/6-chai-nuoc-ngot-co-ga-coca-cola-zero-600ml-202111050924197677_300x300.jpg', N'59 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 30000, 100, 60, 4.9, 7, N'lsp010', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp060', N'Trà gạo lứt đậu đen Ngô Mích 1kg', N'https://cdn.tgdd.vn/Products/Images/2385/229023/bhx/tra-gao-lut-dau-den-xanh-long-ngo-mich-goi-1kg-202112182012403963_300x300.jpg', N'60 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 148000, 300, 40, 4.2, 7, N'lsp010', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp061', N'Cà phê phin giấy Shin Coffee 65g', N'https://cdn.tgdd.vn/Products/Images/2883/231503/bhx/ca-phe-phin-giay-shin-coffee-65g-202104201628307133_300x300.jpg', N'61 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 200, 80, 4.1, 7, N'lsp010', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp062', N'6 lon nước tăng lực Sting 320ml', N'https://cdn.tgdd.vn/Products/Images/3226/195238/bhx/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202111261957320563.jpg', N'62 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 48000, 100, 80, 4.9, 7, N'lsp010', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp063', N'24 chai nước uống Dasani 500ml', N'https://cdn.tgdd.vn/Products/Images/2563/83683/bhx/thung-24-chai-nuoc-tinh-khiet-dasani-500ml-202103032242576663_300x300.jpg', N'63 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 94000, 30, 90, 5, 7, N'lsp010', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp064', N'28 chai nước uống Aquafina 500ml', N'https://cdn.tgdd.vn/Products/Images/2563/231913/bhx/thung-28-chai-nuoc-tinh-khiet-aquafina-500ml-202110050921280457.jpg', N'64 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 130000, 20, 50, 4.7, 7, N'lsp010', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp065', N'24 chai nước uống LaVie 500ml', N'https://cdn.tgdd.vn/Products/Images/2563/84812/bhx/thung-24-chai-nuoc-khoang-la-vie-500ml-202112312142300790_300x300.jpg', N'65 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 84000, 20, 50, 4.9, 7, N'lsp010', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp066', N'24 chai nước ion I-on Life 330ml', N'https://cdn.tgdd.vn/Products/Images/2563/225866/bhx/24-chai-nuoc-uong-i-on-kiem-akaline-i-on-life-330ml-202103032253392544_300x300.jpg', N'66 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 104000, 20, 60, 4.1, 7, N'lsp010', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp067', N'Thùng 24 chai nước Vĩnh Hảo 500ml', N'https://cdn.tgdd.vn/Products/Images/2563/88068/bhx/thung-24-chai-nuoc-khoang-vinh-hao-500ml-202103032301086794_300x300.jpg', N'67 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 164000, 20, 40, 4.5, 7, N'lsp010', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp068', N'48 bịch sữa tươi Dutch Lady 220ml', N'https://cdn.tgdd.vn/Products/Images/2386/86172/bhx/thung-48-bich-sua-tiet-trung-co-duong-dutch-lady-canxi-protein-220ml-202105151156095786_300x300.jpg', N'68 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 300000, 20, 60, 4.9, 7, N'lsp010', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp069', N'Thùng 48 bịch sữa ít đường 220ml', N'https://cdn.tgdd.vn/Products/Images/2386/162411/bhx/thung-48-bich-sua-dinh-duong-it-duong-vinamilk-220ml-202105170848106031_300x300.jpg', N'69 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 300000, 30, 50, 4.7, 7, N'lsp010', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp070', N'48 bịch sữa TH True Milk 220ml', N'https://cdn.tgdd.vn/Products/Images/2386/86199/bhx/thung-48-bich-sua-tuoi-tiet-trung-it-duong-th-true-milk-220ml-202105151158179435_300x300.jpg', N'70 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 370000, 30, 40, 4.1, 7, N'lsp010', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp071', N'48 bịch sữa tươi Dalat Milk 220ml', N'https://cdn.tgdd.vn/Products/Images/2386/223734/bhx/thung-48-bich-sua-tuoi-tiet-trung-co-duong-dalat-milk-220ml-202105151148248885_300x300.jpg', N'71 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 330000, 30, 60, 4.9, 7, N'lsp010', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp072', N'48 hộp sữa tươi Nutimilk 180ml', N'https://cdn.tgdd.vn/Products/Images/2386/252611/bhx/thung-48-hop-sua-tuoi-tiet-trung-it-duong-nutimilk-newzealand-180ml-202110270911073223_300x300.jpg', N'72 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 335000, 30, 50, 4.3, 7, N'lsp010', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp073', N'Gạo trắng nở xốp Bách hoá XANH 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/210380/bhx/gao-trang-bach-hoa-xanh-tui-5kg-202103040802266309_300x300.jpg', N'73 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 77000, 50, 40, 4.7, 7, N'lsp011', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp074', N'Gạo thơm Vua Gạo ST25 túi 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/236014/bhx/gao-thom-vua-gao-st25-tui-5kg-202103131622234311_300x300.jpg', N'74 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 159000, 100, 20, 4.9, 7, N'lsp011', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp075', N'Gạo trắng Vinh Hiển Đỗ Quyên 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/193609/bhx/gao-vinh-hien-do-quyen-tui-5kg-202111021628092012_300x300.jpg', N'75 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 85000, 100, 30, 4.3, 7, N'lsp011', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp076', N'Gạo nếp Bắc đặc sản Việt San 1kg', N'https://cdn.tgdd.vn/Products/Images/2513/77348/bhx/nep-bac-viet-san-tui-1kg-202103040810147166_300x300.jpg', N'76 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 36000, 100, 50, 4.3, 7, N'lsp011', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp077', N'Gạo trắng dẻo vừa Ngon Lúa Mới 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/223666/bhx/gao-ngon-lua-moi-tui-5kg-202103040825419102_300x300.jpg', N'77 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 80000, 100, 30, 4.9, 7, N'lsp011', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp078', N'Gạo trắng Thiên Kim Tây Đô túi 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/82914/bhx/gao-thien-kim-tay-do-tui-5kg-202103040832198600_300x300.jpg', N'78 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 78000, 100, 60, 4.5, 7, N'lsp011', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp079', N'Gạo thơm ST21 dẻo nhiều A An 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/223652/bhx/gao-thom-a-an-st21-tui-5kg-202103040806043940_300x300.jpg', N'79 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 110000, 100, 50, 4.7, 7, N'lsp011', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp080', N'Gạo Hạt Ngọc Trời Bạch Dương 5kg', N'https://cdn.tgdd.vn/Products/Images/2513/79016/bhx/gao-hat-ngoc-troi-bach-duong-tui-5kg-202103040821115977_300x300.jpg', N'80 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 112000, 100, 40, 4.9, 7, N'lsp011', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp081', N'Bí đỏ hồ lô túi 700g (0.5-1 trái)', N'https://cdn.tgdd.vn/Products/Images/8791/234994/bhx/canh-bi-ho-lo-khay-400g-202105051052508294_300x300.jpeg', N'81 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 17500, 40, 50, 4.3, 7, N'lsp012', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp082', N'Khoai lang Nhật dẻo ngọt túi 1kg', N'https://cdn.tgdd.vn/Products/Images/2510/248276/bhx/nuoc-lau-san-nha-maxkleen-huong-ngan-hoa-ngot-ngao-tui-1kg-202110231502004140_300x300.jpg', N'82 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 50, 60, 4.7, 7, N'lsp012', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp083', N'Khoai mỡ tím túi lưới 1kg (1-2 củ)', N'https://cdn.tgdd.vn/Products/Images/8785/220460/bhx/khoai-mo-tui-1kg-202011071639006438.jpg', N'83 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 45000, 50, 80, 5, 7, N'lsp012', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp084', N'Khoai lang mật dẻo ngọt túi 1kg', N'https://cdn.tgdd.vn/Products/Images/2510/248276/bhx/nuoc-lau-san-nha-maxkleen-huong-ngan-hoa-ngot-ngao-tui-1kg-202110231502004140_300x300.jpg', N'84 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 40000, 50, 70, 4.3, 7, N'lsp012', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp085', N'Khổ qua tươi vỉ 500g (1-2 quả)', N'https://cdn.tgdd.vn/Products/Images/8785/267824/bhx/kho-qua-vi-500g-2-4-qua-202112312053214151_300x300.jpg', N'85 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 16000, 50, 90, 4.7, 7, N'lsp012', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp086', N'Cà chua beef túi 500g (4-6 trái)', N'https://cdn.tgdd.vn/Products/Images/8785/222935/bhx/ca-chua-beef-tui-500g-202103031635501521_300x300.jpg', N'86 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 50, 90, 4.9, 7, N'lsp012', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp087', N'Ớt chuông đỏ túi 300g (1-2 quả)', N'https://cdn.tgdd.vn/Products/Images/8785/233908/bhx/ot-chuong-do-tui-300g-202101271558404495_300x300.jpg', N'87 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 24000, 50, 50, 4.3, 7, N'lsp012', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp088', N'Bắp cải tím túi 500g (1-2 bắp)', N'https://cdn.tgdd.vn/Products/Images/8785/222870/bhx/bap-cai-tim-tui-500g-202103031638073267_300x300.jpg', N'88 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 22500, 50, 40, 4.3, 7, N'lsp012', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp089', N'Khẩu trang y tế Promask N95 3 cái', N'https://cdn.tgdd.vn/Products/Images/5872/248093/bhx/khau-trang-y-te-promask-n95-5-lop-goi-3-cai-202110221220345608_300x300.jpg', N'89 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 52000, 400, 60, 4.1, 7, N'lsp014', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp090', N'Khẩu trang vải Hanvico Nano 2 cái', N'https://cdn.tgdd.vn/Products/Images/5872/220432/bhx/khau-trang-vai-hanvico-nano-chong-khuan-giao-mau-ngau-nhien-202104220850336198_300x300.jpg', N'90 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 30000, 400, 20, 4.9, 7, N'lsp014', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp091', N'Khẩu trang y tế Promask N95 10 cái', N'https://cdn.tgdd.vn/Products/Images/5872/248094/bhx/khau-trang-y-te-promask-n95-5-lop-hop-10-cai-202110221219226164_300x300.jpg', N'91 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 165000, 500, 30, 4.7, 7, N'lsp014', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp092', N'Khẩu trang đa năng Mayan 3D Mask', N'https://cdn.tgdd.vn/Products/Images/5872/197568/bhx/khau-trang-mayan-3d-mask-pm-25-giao-mau-ngau-nhien-202104220848094107_300x300.jpg', N'92 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 27000, 600, 20, 4.1, 7, N'lsp014', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp093', N'Khẩu trang 3 lớp Ecom MED 50 cái', N'https://cdn.tgdd.vn/Products/Images/5872/233106/bhx/khau-trang-ecom-med-safe-mask-3-lop-hop-50-cai-202104220858314246_300x300.jpg', N'93 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 200, 50, 4.9, 7, N'lsp014', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp094', N'Hộp 20 khẩu trang y tế KHATRACO', N'https://cdn.tgdd.vn/Products/Images/5872/226683/bhx/khau-trang-y-te-khatraco-4-lop-hop-20-cai-giao-mau-ngau-nhien-202104220856339140_300x300.jpg', N'94 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 33000, 100, 60, 4.5, 7, N'lsp014', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp095', N'Gel rửa tay khô Hapicare chai 60ml', N'https://cdn.tgdd.vn/Products/Images/2486/219217/bhx/gel-rua-tay-kho-khang-khuan-hapicare-huong-oai-huong-chai-60ml-202103030019070257_300x300.jpg', N'95 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 10000, 200, 40, 4.9, 7, N'lsp015', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp096', N'Dung dịch rửa tay Hapicare 100ml', N'https://cdn.tgdd.vn/Products/Images/2486/219216/bhx/dung-dich-rua-tay-khang-khuan-hapicare-tra-xanh-chai-100ml-202111171000383564_300x300.jpeg', N'96 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 10000, 200, 80, 4.1, 7, N'lsp015', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp097', N'Gel rửa tay khô Lamcosmé quế 240ml', N'https://cdn.tgdd.vn/Products/Images/2486/264413/bhx/gel-rua-tay-kho-3k-lamcosme-huong-que-thao-moc-240ml-202112231652112961_300x300.jpg', N'97 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 10000, 200, 70, 4.7, 7, N'lsp015', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp098', N'Nước rửa tay Antabax chai 500ml', N'https://cdn.tgdd.vn/Products/Images/2486/219181/bhx/nuoc-rua-tay-khang-khuan-antabax-bao-ve-chai-500ml-202103030002160354_300x300.jpg', N'98 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 35000, 200, 80, 4.9, 7, N'lsp015', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp099', N'Rửa tay khô Lamcosmé bạc hà 500ml', N'https://cdn.tgdd.vn/Products/Images/2486/264416/bhx/gel-rua-tay-kho-3k-lamcosme-huong-bac-ha-thom-mat-500ml-202112231312523280_300x300.jpg', N'99 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 25000, 200, 90, 4.1, 7, N'lsp015', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp100', N'Gel rửa tay khô Kleen chai 90ml', N'https://cdn.tgdd.vn/Products/Images/2486/218900/bhx/gel-rua-tay-kho-kleen-huong-dao-chai-90ml-202103030000134533_300x300.jpg', N'100 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 13000, 200, 80, 4.5, 7, N'lsp015', N'ch002')
GO
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp101', N'12 cuộn giấy vệ sinh PREMIER 2 lớp', N'https://cdn.tgdd.vn/Products/Images/9081/201348/bhx/12-cuon-giay-ve-sinh-premier-vinaroll-2-lop-202104201321080590_300x300.jpg', N'101 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 45000, 300, 80, 5, 7, N'lsp016', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp102', N'Giấy đa năng Homelux 2 lớp 100 tờ', N'https://cdn.tgdd.vn/Products/Images/3004/212277/bhx/giay-bep-da-nang-homelux-2-lop-goi-100-to-202104231156509018_300x300.jpg', N'102 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 11000, 120, 50, 4.1, 7, N'lsp016', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp103', N'Dầu gội Ironman Encounter 650g', N'https://cdn.tgdd.vn/Products/Images/2483/221852/bhx/dau-goi-nhiet-ironman-encounter-650g-202103021414249560_300x300.jpg', N'103 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 157000, 130, 60, 4.5, 7, N'lsp016', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp104', N'Dầu gội phục hồi tóc Tsubaki 490ml', N'https://cdn.tgdd.vn/Products/Images/2483/224436/bhx/dau-goi-tsubaki-phuc-hoi-hu-ton-490ml-202103021523512444_300x300.jpg', N'104 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 100000, 400, 50, 4.9, 7, N'lsp016', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp105', N'Kem đánh răng Dental Pro 3D 75ml', N'https://cdn.tgdd.vn/Products/Images/2446/258350/bhx/kem-danh-rang-dental-pro-whitening-3d-dot-pha-trang-sang-75ml-202112151243483381_300x300.jpeg', N'105 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 109000, 500, 80, 4.1, 7, N'lsp016', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp106', N'Bộ 2 bàn chải P/S than bạc lông tơ', N'https://cdn.tgdd.vn/Products/Images/2491/102686/bhx/bo-2-ban-chai-p-s-than-bac-khang-khuan-long-to-sieu-mem-202103030010456271_300x300.jpg', N'106 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 463000, 300, 80, 4.1, 7, N'lsp016', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp107', N'Băng vệ sinh Sofy Fresh mỏng 23cm', N'https://cdn.tgdd.vn/Products/Images/2516/202903/bhx/bang-ve-sinh-sofy-cooling-fresh-ultra-slim-01-sieu-mong-canh-8-mieng-23cm-202103012325351955_300x300.jpg', N'107 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 41000, 150, 70, 4.7, 7, N'lsp016', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp108', N'Sữa tắm cao cấp Romano Vip 650g', N'https://cdn.tgdd.vn/Products/Images/2444/87390/bhx/sua-tam-nuoc-hoa-cao-cap-romano-vip-650g-202108121348398609.jpg', N'108 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 143000, 200, 50, 4.1, 7, N'lsp016', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp109', N'Bột giặt nước hoa NET Matic 6kg', N'https://cdn.tgdd.vn/Products/Images/2463/203032/bhx/bot-giat-net-matic-huong-nuoc-hoa-thien-nhien-6kg-202104220939349501_300x300.jpg', N'109 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 170000, 300, 90, 4.3, 7, N'lsp017', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp110', N'Nước giặt tươi mát Downy túi 2 lít', N'https://cdn.tgdd.vn/Products/Images/2464/213856/bhx/nuoc-giat-downy-matic-bien-xanh-tuoi-mat-tui-2-lit-202104141625595448_300x300.jpg', N'110 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 148000, 300, 50, 4.3, 7, N'lsp017', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp111', N'Nước rửa chén Sunlight 3.67 lít', N'https://cdn.tgdd.vn/Products/Images/2387/76485/bhx/nuoc-rua-chen-sunlight-chanh-100-chiet-xuat-chanh-tuoi-can-367-lit-202103030903102510_300x300.jpg', N'111 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 100000, 200, 60, 4.1, 7, N'lsp017', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp112', N'Nước rửa chén Lix đậm đặc 3.6 kg', N'https://cdn.tgdd.vn/Products/Images/2387/76475/bhx/nuoc-rua-chen-lix-sieu-dam-dac-chiet-xuat-chanh-can-392-lit-202106230908198235.jpg', N'112 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 67000, 200, 20, 4.5, 7, N'lsp017', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp113', N'Nước rửa chén Sunlight chanh 725ml', N'https://cdn.tgdd.vn/Products/Images/2387/76487/bhx/nuoc-rua-chen-sunlight-chanh-100-chiet-xuat-chanh-tuoi-tui-725ml-202105271111554259_300x300.jpg', N'113 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 25500, 200, 30, 4.7, 7, N'lsp017', N'ch001')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp114', N'Tẩy bồn cầu Vim xanh biển 880ml', N'https://cdn.tgdd.vn/Products/Images/2511/76924/bhx/nuoc-gel-tay-bon-cau-vim-xanh-bien-diet-khuan-huong-diu-nhe-chai-880ml-202110041656581480.jpg', N'114 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 31500, 200, 30, 4.1, 7, N'lsp017', N'ch002')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp115', N'Nước lau bếp Suzy bạc hà 500ml', N'https://cdn.tgdd.vn/Products/Images/2783/238275/bhx/nuoc-lau-bep-suzy-huong-bac-ha-chai-500ml-202108180838099831_300x300.jpg', N'115 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 19000, 120, 50, 4.1, 7, N'lsp017', N'ch003')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp116', N'Nước lau sàn kháng khuẩn NET 4kg', N'https://cdn.tgdd.vn/Products/Images/2510/76409/bhx/nuoc-lau-san-net-huong-bac-ha-can-4kg-202105031304534796_300x300.jpg', N'116 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 70000, 240, 20, 4.5, 7, N'lsp017', N'ch004')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp117', N'Bánh tráng Mekong River 16cm 300g', N'https://cdn.tgdd.vn/Products/Images/3233/237509/bhx/banh-trang-16cm-mekong-river-goi-300g-202105070922046150_300x300.jpg', N'117 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 21000, 320, 30, 4.1, 7, N'lsp013', N'ch005')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp118', N'Bánh tráng chả giò Cầu Tre 280g', N'https://cdn.tgdd.vn/Products/Images/3233/233640/bhx/banh-trang-cha-gio-19cm-cau-tre-goi-280g-202104231519354736_300x300.jpg', N'118 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 15500, 200, 20, 4.1, 7, N'lsp013', N'ch006')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp119', N'Yến mạch ăn liền Yumfood hũ 800g', N'https://cdn.tgdd.vn/Products/Images/2903/229445/bhx/yen-mach-nguyen-chat-yumfood-hu-800g-202104220840072605_300x300.jpg', N'119 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 48000, 100, 40, 5, 7, N'lsp013', N'ch007')
INSERT [dbo].[SanPham] ([maSP], [tenSP], [anhSP], [moTaSP], [ngayDang], [giaSP], [soLuongTon], [soSPDaBan], [avgRating], [soRating], [loaiSP], [account_CH]) VALUES (N'sp120', N'Ngũ cốc Ohh Granola Healthy 250g', N'https://cdn.tgdd.vn/Products/Images/2903/241363/bhx/ngu-coc-dinh-duong-ohh-granola-super-healthy-hop-250g-202106090857062120_300x300.jpg', N'120 Hương vị cola sảng khoái, thơm lừng hoà quyện trong miếng kẹo mềm dẻo, kích thích mọi giác quan.', CAST(N'2021-12-31' AS Date), 134000, 100, 50, 4.1, 7, N'lsp013', N'ch001')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0101', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0101')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0102')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0103', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0103')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0104', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0104')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0105')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0201', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0201')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0202', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0202')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0203', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0203')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0204', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0204')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0205', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0205')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0301', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0301')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0302', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0302')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0303', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0303')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0304', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0304')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0305', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0305')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0306', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0306')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0401', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0401')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0402', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0402')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0403', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0403')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0404', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0404')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0405', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0405')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0501', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0501')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0502', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0502')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0503', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0503')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0504', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0504')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0505', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0505')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0601', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0601')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0602', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0602')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0603', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0603')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0604', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0604')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0605', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0605')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0701', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0701')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0702', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0702')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0703', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0703')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0704', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0704')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0705', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0705')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0801', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0801')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0802', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0802')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0803', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0803')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0804', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0804')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0805', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0805')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0901', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0901')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0902', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0902')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0903', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0903')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0904', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0904')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp0905', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm0905')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1001', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1001')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1002', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1002')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1003', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1003')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1004', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1004')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1005', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1005')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1101', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1101')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1102')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1103', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1103')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1104', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1104')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1105')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1201', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1201')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1202', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1202')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1203', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1203')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1204', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1204')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sp1205', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcm1205')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbc01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbc01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbc02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbc02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbc03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbc03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbc04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbc04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbc05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbc05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbtan01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbtan01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbtan02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbtan02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbtan03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbtan03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbtan04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbtan04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbtan05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbtan05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbthanh1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbthanh1')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbthanh2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbthanh2')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbthanh3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbthanh3')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbthanh4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbthanh4')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spbthanh5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmbthanh5')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcc01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcc01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcc02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcc02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcc03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcc03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcc04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcc04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcc05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcc05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcg01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcg01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcg02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcg02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcg03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcg03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcg04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcg04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spcg05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmcg05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spgv01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmgv01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spgv02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmgv02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spgv03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmgv03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spgv04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmgv04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spgv05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmgv05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sphm01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmhm01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sphm02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmhm02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sphm03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmhm03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sphm04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmhm04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sphm05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmhm05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spnb01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmnb01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spnb02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmnb02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spnb03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmnb03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spnb04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmnb04')
GO
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'spnb05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmnb05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sppn01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmpn01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sppn02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmpn02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sppn03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmpn03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sppn04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmpn04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sppn05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmpn05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptb01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtb01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptb02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtb02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptb03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtb03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptb04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtb04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptb05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtb05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptd01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtd01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptd02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtd02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptd03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtd03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptd04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtd04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptd05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtd05')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptp01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtp01')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptp02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtp02')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptp03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtp03')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptp04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtp04')
INSERT [dbo].[Shipper] ([accountID], [hoTen], [CMND], [ngaySinh], [bienSo], [maBangLai], [SDT], [email], [status], [diaChi], [maPhuongXa]) VALUES (N'sptp05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'hcmtp05')
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'admin', N'admin', N'1', N'nv', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch001', N'ch001', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch002', N'ch002', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch003', N'ch003', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch004', N'ch004', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch005', N'ch005', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch006', N'ch006', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'ch007', N'ch007', N'1', N'ch', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'kh001', N'kh001', N'1', N'kh', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'kh002', N'kh002', N'1', N'kh', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'kh003', N'kh003', N'1', N'kh', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'nv001', N'nv001', N'1', N'nv', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'nv002', N'nv002', N'1', N'nv', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'nv003', N'nv003', N'1', N'nv', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0101', N'sp0101', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0102', N'sp0102', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0103', N'sp0103', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0104', N'sp0104', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0105', N'sp0105', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0201', N'sp0201', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0202', N'sp0202', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0203', N'sp0203', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0204', N'sp0204', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0205', N'sp0205', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0301', N'sp0301', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0302', N'sp0302', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0303', N'sp0303', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0304', N'sp0304', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0305', N'sp0305', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0306', N'sp0306', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0401', N'sp0401', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0402', N'sp0402', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0403', N'sp0403', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0404', N'sp0404', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0405', N'sp0405', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0501', N'sp0501', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0502', N'sp0502', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0503', N'sp0503', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0504', N'sp0504', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0505', N'sp0505', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0601', N'sp0601', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0602', N'sp0602', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0603', N'sp0603', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0604', N'sp0604', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0605', N'sp0605', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0701', N'sp0701', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0702', N'sp0702', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0703', N'sp0703', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0704', N'sp0704', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0705', N'sp0705', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0801', N'sp0801', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0802', N'sp0802', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0803', N'sp0803', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0804', N'sp0804', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0805', N'sp0805', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0901', N'sp0901', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0902', N'sp0902', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0903', N'sp0903', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0904', N'sp0904', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp0905', N'sp0905', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1001', N'sp1001', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1002', N'sp1002', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1003', N'sp1003', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1004', N'sp1004', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1005', N'sp1005', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1101', N'sp1101', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1102', N'sp1102', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1103', N'sp1103', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1104', N'sp1104', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1105', N'sp1105', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1201', N'sp1201', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1202', N'sp1202', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1203', N'sp1203', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1204', N'sp1204', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sp1205', N'sp1205', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbc01', N'spbc01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbc02', N'spbc02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbc03', N'spbc03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbc04', N'spbc04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbc05', N'spbc05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbtan01', N'spbtan01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbtan02', N'spbtan02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbtan03', N'spbtan03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbtan04', N'spbtan04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbtan05', N'spbtan05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbthanh1', N'spbthanh1', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbthanh2', N'spbthanh2', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbthanh3', N'spbthanh3', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbthanh4', N'spbthanh4', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spbthanh5', N'spbthanh5', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcc01', N'spcc01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcc02', N'spcc02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcc03', N'spcc03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcc04', N'spcc04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcc05', N'spcc05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcg01', N'spcg01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcg02', N'spcg02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcg03', N'spcg03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcg04', N'spcg04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spcg05', N'spcg05', N'1', N'sp', NULL)
GO
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spgv01', N'spgv01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spgv02', N'spgv02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spgv03', N'spgv03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spgv04', N'spgv04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spgv05', N'spgv05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sphm01', N'sphm01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sphm02', N'sphm02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sphm03', N'sphm03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sphm04', N'sphm04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sphm05', N'sphm05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spnb01', N'spnb01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spnb02', N'spnb02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spnb03', N'spnb03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spnb04', N'spnb04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'spnb05', N'spnb05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sppn01', N'sppn01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sppn02', N'sppn02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sppn03', N'sppn03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sppn04', N'sppn04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sppn05', N'sppn05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptb01', N'sptb01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptb02', N'sptb02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptb03', N'sptb03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptb04', N'sptb04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptb05', N'sptb05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptd01', N'sptd01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptd02', N'sptd02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptd03', N'sptd03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptd04', N'sptd04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptd05', N'sptd05', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptp01', N'sptp01', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptp02', N'sptp02', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptp03', N'sptp03', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptp04', N'sptp04', N'1', N'sp', NULL)
INSERT [dbo].[TaiKhoan] ([accountID], [username], [password], [role], [token]) VALUES (N'sptp05', N'sptp05', N'1', N'sp', NULL)
INSERT [dbo].[TinhThanhPho] ([maTinhTP], [tenTinhTP]) VALUES (N'hcm', N'TP.Hồ Chí Minh')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's1', N'Chờ giao hàng')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's2', N'Đang đóng gói')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's3', N'Đang giao hàng')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's4', N'Giao hàng thành công')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's5', N'Bị huỷ bỏ')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's6', N'Hoàn lại')
INSERT [dbo].[TrangThai] ([statusCode], [trangThai]) VALUES (N's7', N'Từ chối')
USE [master]
GO
ALTER DATABASE [MIS] SET  READ_WRITE 
GO

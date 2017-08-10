USE [master]
GO

/****** Object:  Database [HandbookNew]    Script Date: 8/2/2017 4:31:31 PM ******/
CREATE DATABASE [HandbookNew]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'HandbookNew', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQL2012\MSSQL\DATA\HandbookNew.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'HandbookNew_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQL2012\MSSQL\DATA\HandbookNew_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO

ALTER DATABASE [HandbookNew] SET COMPATIBILITY_LEVEL = 110
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HandbookNew].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [HandbookNew] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [HandbookNew] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [HandbookNew] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [HandbookNew] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [HandbookNew] SET ARITHABORT OFF 
GO

ALTER DATABASE [HandbookNew] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [HandbookNew] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [HandbookNew] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [HandbookNew] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [HandbookNew] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [HandbookNew] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [HandbookNew] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [HandbookNew] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [HandbookNew] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [HandbookNew] SET  DISABLE_BROKER 
GO

ALTER DATABASE [HandbookNew] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [HandbookNew] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [HandbookNew] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [HandbookNew] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [HandbookNew] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [HandbookNew] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [HandbookNew] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [HandbookNew] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [HandbookNew] SET  MULTI_USER 
GO

ALTER DATABASE [HandbookNew] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [HandbookNew] SET DB_CHAINING OFF 
GO

ALTER DATABASE [HandbookNew] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [HandbookNew] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [HandbookNew] SET  READ_WRITE 
GO


